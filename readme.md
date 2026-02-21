# Claude Code Mastery: Advanced Patterns for 10x Productivity

**A comprehensive guide to the patterns that actually move the needle**

_Reverse-engineered from 2000+ hours of LLM-assisted coding_

---

## Table of Contents

1. [Core Philosophy: Context Engineering](#1-core-philosophy-context-engineering)
1. [Pattern 1: Error Logging System](#2-pattern-1-error-logging-system)
1. [Pattern 2: Slash Commands as Lightweight Local Apps](#3-pattern-2-slash-commands-as-lightweight-local-apps)
1. [Pattern 3: Hooks for Deterministic Safety](#4-pattern-3-hooks-for-deterministic-safety)
1. [Pattern 4: Context Hygiene](#5-pattern-4-context-hygiene)
1. [Pattern 5: Subagent Control](#6-pattern-5-subagent-control)
1. [Pattern 6: The Reprompter System](#7-pattern-6-the-reprompter-system)
1. [Subagent Monitoring Dashboard](#8-subagent-monitoring-dashboard)
1. [Quick Reference Table](#9-quick-reference-table)

---

## 1. Core Philosophy: Context Engineering

### The Fundamental Mindset Shift

**Any issue in LLM-generated code is solely due to YOU.**

This isn’t blame—it’s empowerment. Every error traces back to:

- **Improper prompting**: Vague instructions, missing constraints, unclear success criteria
- **Improper context engineering**: Wrong files loaded, stale context, missing architectural knowledge
- **Context rot**: Degraded quality as the context window fills with irrelevant information
- **Lost in the middle**: The well-documented phenomenon where LLMs pay less attention to middle-of-context information

### The Context Quality Curve

```
Quality of Output
     │
 100%├────────╮
     │        │╲
  80%│        │ ╲
     │        │  ╲ ← "Lost in the Middle" begins
  60%│        │   ╲
     │        │    ╲____
  40%│        │         ╲___
     │        │              ╲___
  20%│        │                   ╲
     └────────┴───────────────────────► Context Usage %
           20%   40%   60%   80%  100%
```

**Key insight**: Quality degrades non-linearly. The last 20% of context is poison.

---

## 2. Pattern 1: Error Logging System

### The Problem

Agentic coding hides the input-output loop from you. Claude makes decisions, executes tools, and you only see the final result. When things go wrong, you don’t know _why_.

### The Solution: Reconstruct the Feedback Loop

Create a systematic log of failures with:

1. **The exact triggering prompt**
1. **The context state** (what files were loaded, % used)
1. **The failure mode** (wrong output, hallucination, refusal, loop)
1. **Your diagnosis** (what did YOU do wrong?)

### Implementation

#### Error Log Template (`~/.claude/error-log.md`)

```markdown
# Claude Code Error Log

## Entry Format

- **Date**:
- **Prompt**: [exact text]
- **Context %**:
- **Files Loaded**:
- **Failure Mode**: [wrong-output | hallucination | refusal | infinite-loop | context-rot]
- **What Claude Did**:
- **What I Expected**:
- **Root Cause**: [prompting | context | model-limitation]
- **Fix Applied**:
- **Pattern Identified**:

---

## 2025-01-03 | Context Rot in Auth Refactor

**Prompt**: "Now refactor the auth module to use the new pattern"

**Context %**: 78%

**Files Loaded**: 12 files from src/auth/, 3 config files, previous conversation

**Failure Mode**: wrong-output

**What Claude Did**: Used old pattern despite being shown new one 30 messages ago

**What I Expected**: Apply the new auth pattern from message #4

**Root Cause**: context - the new pattern was in "lost middle" zone

**Fix Applied**: /clear → re-stated pattern → pointed to specific file with pattern

**Pattern Identified**: ALWAYS re-state critical patterns before asking for implementation if >50% context used

---
```

#### Slash Command for Quick Logging

Create `~/.claude/commands/log-error.md`:

```markdown
---
description: Log a Claude Code error for pattern analysis
argument-hint: [failure-mode] [brief-description]
---

I need to log an error for my learning system. Please help me fill out this template:

**Failure Mode**: $1
**Brief Description**: $2

Ask me the following questions one at a time:

1. What was the exact prompt that triggered this?
2. What was the context % when this happened?
3. What files were loaded?
4. What did you expect vs what happened?
5. What do you think the root cause was?

Then format it as a markdown entry I can append to my error log.
```

### Error Categories & Common Fixes

| Failure Mode      | Common Causes                         | Standard Fixes                      |
| ----------------- | ------------------------------------- | ----------------------------------- |
| **Wrong Output**  | Vague prompt, missing constraints     | Add explicit constraints, examples  |
| **Hallucination** | Asked about code Claude hasn’t seen   | @-mention specific files first      |
| **Refusal**       | Triggered safety, ambiguous request   | Rephrase, provide more context      |
| **Infinite Loop** | Unclear success criteria              | Define exit conditions explicitly   |
| **Context Rot**   | >70% context, stale information       | /clear, restart with fresh context  |
| **Regression**    | Fixed something, broke something else | Require tests before implementation |

---

## 3. Pattern 2: Slash Commands as Lightweight Local Apps

### The Mental Model

Think of slash commands as **Claude-as-a-Service workflows**. They’re like SaaS products you can build in 5 minutes:

- Pre-configured prompts with best practices baked in
- Argument handling for dynamic behavior
- Tool restrictions for safety
- Model selection for cost/quality tradeoffs

### Command Architecture

```
~/.claude/commands/          # Personal commands (available everywhere)
├── quick/                   # Fast, simple commands
│   ├── commit.md
│   ├── pr.md
│   └── review.md
├── research/                # Investigation commands
│   ├── deep-dive.md
│   ├── compare.md
│   └── audit.md
└── workflows/               # Multi-step processes
    ├── feature.md
    ├── debug.md
    └── refactor.md

.claude/commands/            # Project commands (team-shared)
├── test.md
├── deploy.md
└── docs.md
```

### Essential Slash Commands Collection

#### 1. Smart Commit (`~/.claude/commands/commit.md`)

```markdown
---
description: Create a semantic commit with conventional format
allowed-tools: Bash(git diff:*), Bash(git status:*), Bash(git add:*), Bash(git commit:*)
model: claude-3-5-haiku-20241022
---

Analyze my staged changes and create a commit:

1. Run `git diff --cached` to see staged changes
2. Run `git status` to understand the scope
3. Generate a commit message following Conventional Commits:
   - feat: new feature
   - fix: bug fix
   - refactor: code restructuring
   - docs: documentation
   - test: adding tests
   - chore: maintenance

4. Format: `type(scope): brief description`
   - Keep under 72 characters
   - Use imperative mood ("add" not "added")
5. Ask me to confirm, then commit

If no changes are staged, help me stage relevant files first.
```

#### 2. PR Creator (`~/.claude/commands/pr.md`)

```markdown
---
description: Create a comprehensive pull request
allowed-tools: Bash(git:*), Bash(gh:*)
argument-hint: [base-branch]
---

Create a pull request against $ARGUMENTS (default: main):

1. Run `git log main..HEAD --oneline` to see commits
2. Run `git diff main...HEAD --stat` for change summary
3. Generate PR with:
   - Title: conventional format matching primary change
   - Description:

     ## Summary

     [2-3 sentences on what and why]

     ## Changes
     - [bullet list of key changes]

     ## Testing
     - [how this was tested]

     ## Screenshots

     [if UI changes, note that screenshots should be added]

4. Use `gh pr create` with generated content
5. Output the PR URL when complete
```

#### 3. Deep Investigation (`~/.claude/commands/investigate.md`)

```markdown
---
description: Deep dive into a bug or behavior
allowed-tools: Read, Grep, Glob, Bash(git log:*), Bash(git blame:*)
argument-hint: [issue-description]
---

Investigate: $ARGUMENTS

Follow this systematic process:

## Phase 1: Understand

- What is the expected behavior?
- What is the actual behavior?
- When did this start? (check git log if relevant)

## Phase 2: Locate

- Search for relevant code with Grep
- Trace the code path from entry point
- Identify all files involved

## Phase 3: Analyze

- Use git blame to understand history
- Look for recent changes that might have caused this
- Check for related issues/patterns elsewhere

## Phase 4: Report

Provide a structured report:

1. **Root Cause**: [one sentence]
2. **Affected Files**: [list]
3. **Recommended Fix**: [approach]
4. **Risk Assessment**: [what could break]
5. **Test Plan**: [how to verify]

Do NOT make any changes. Investigation only.
```

#### 4. Test Generator (`~/.claude/commands/test.md`)

```markdown
---
description: Generate comprehensive tests for a file or function
allowed-tools: Read, Write, Bash(npm test:*), Bash(pytest:*)
argument-hint: [file-or-function]
---

Generate tests for: $ARGUMENTS

## Process:

1. **Read the target code** - understand all paths and edge cases
2. **Identify test framework** - check existing tests, package.json, pytest.ini
3. **Generate tests covering**:
   - Happy path (normal usage)
   - Edge cases (empty, null, boundary values)
   - Error cases (invalid input, exceptions)
   - Integration points (mocks for external deps)

4. **Follow existing patterns** - match style of existing tests
5. **Run the tests** - ensure they pass
6. **Report coverage gaps** - what's still untested?

Output format: Create test file(s) following project conventions.
```

#### 5. Security Audit (`~/.claude/commands/security-audit.md`)

```markdown
---
description: Security-focused code review
allowed-tools: Read, Grep, Glob
argument-hint: [file-or-directory]
---

Perform security audit on: $ARGUMENTS

## Check for:

### Input Validation

- [ ] SQL injection vulnerabilities
- [ ] XSS (Cross-Site Scripting)
- [ ] Command injection
- [ ] Path traversal

### Authentication & Authorization

- [ ] Hardcoded credentials
- [ ] Weak session handling
- [ ] Missing auth checks
- [ ] Privilege escalation paths

### Data Handling

- [ ] Sensitive data in logs
- [ ] Unencrypted secrets
- [ ] PII exposure
- [ ] Insecure deserialization

### Dependencies

- [ ] Known vulnerable packages
- [ ] Outdated dependencies
- [ ] Unused dependencies

## Output Format:

For each finding:

- **Severity**: Critical / High / Medium / Low
- **Location**: file:line
- **Issue**: description
- **Recommendation**: how to fix
- **Reference**: CWE or OWASP link if applicable
```

#### 6. Refactor Planner (`~/.claude/commands/refactor-plan.md`)

````markdown
---
description: Plan a refactoring without executing it
allowed-tools: Read, Grep, Glob
argument-hint: [what-to-refactor]
---

Plan refactoring for: $ARGUMENTS

## DO NOT MAKE ANY CHANGES - PLANNING ONLY

### Analysis Phase:

1. Read all relevant files
2. Map dependencies (what imports this? what does this import?)
3. Identify test coverage
4. Note potential breaking changes

### Output a Refactoring Plan:

```markdown
# Refactoring Plan: [title]

## Current State

[Describe the current architecture/code]

## Desired State

[Describe the target architecture/code]

## Steps (in order)

1. [ ] Step 1 - [description] - Risk: Low/Med/High
2. [ ] Step 2 - [description] - Risk: Low/Med/High
       ...

## Files to Modify

- `path/to/file.ts` - [what changes]
- `path/to/other.ts` - [what changes]

## Files to Create

- `path/to/new.ts` - [purpose]

## Files to Delete

- `path/to/old.ts` - [why safe to delete]

## Tests to Add/Update

- [list of test changes needed]

## Rollback Plan

[How to undo if something goes wrong]

## Estimated Effort

[Time estimate]
```
````

When I approve, I’ll run a separate command to execute each step.

```
---

## 4. Pattern 3: Hooks for Deterministic Safety

### The Problem with --dangerously-skip-permissions

The `--dangerously-skip-permissions` flag is seductive. It eliminates the constant "Can I run X?" prompts and enables true flow state. But it's called "dangerous" for a reason—Claude can:
- Delete files with `rm -rf`
- Push to git without review
- Run arbitrary shell commands
- Modify system files

### The Solution: Guardrails via Hooks

Hooks let you intercept Claude's actions at various lifecycle points and apply your own rules. The pattern:
```

┌─────────────────────────────────────────────────────────────┐
│ │
│ –dangerously-skip-permissions + Safety Hooks │
│ │
│ (Flow State) (Guardrails) │
│ │
│ = Safe YOLO Mode │
│ │
└─────────────────────────────────────────────────────────────┘

````
### Hook Configuration

Location: `~/.claude/settings.json` or `.claude/settings.json`

#### Complete Safety Hook Configuration

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/bash-safety.sh"
          }
        ]
      },
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/write-safety.sh"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write(*.py)",
        "hooks": [
          {
            "type": "command",
            "command": "python -m black \"$CLAUDE_FILE_PATHS\""
          }
        ]
      },
      {
        "matcher": "Write(*.ts)",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write \"$CLAUDE_FILE_PATHS\""
          }
        ]
      },
      {
        "matcher": "Write(*.tsx)",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write \"$CLAUDE_FILE_PATHS\" && npx tsc --noEmit \"$CLAUDE_FILE_PATHS\" 2>&1 || echo '⚠️ TypeScript errors'"
          }
        ]
      }
    ],
    "Stop": [
      {
        "matcher": "*",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/hooks/session-summary.sh"
          }
        ]
      }
    ]
  }
}
````

#### Bash Safety Hook (`~/.claude/hooks/bash-safety.sh`)

```bash
#!/bin/bash

# Read the tool input from stdin
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

# Define dangerous patterns
DANGEROUS_PATTERNS=(
    "rm -rf /"
    "rm -rf ~"
    "rm -rf \$HOME"
    "rm -rf \*"
    "> /dev/sd"
    "mkfs"
    "dd if="
    ":(){:|:&};:"         # Fork bomb
    "chmod -R 777 /"
    "chown -R"
    "curl.*| bash"
    "wget.*| bash"
    "curl.*| sh"
    "wget.*| sh"
    "git push.*--force"
    "git push.*-f"
    "DROP TABLE"
    "DROP DATABASE"
    "DELETE FROM.*WHERE 1"
    "npm publish"
    "pip upload"
)

# Check each pattern
for pattern in "${DANGEROUS_PATTERNS[@]}"; do
    if echo "$COMMAND" | grep -qE "$pattern"; then
        echo '{"decision": "block", "reason": "Blocked dangerous command pattern: '"$pattern"'"}'
        exit 0
    fi
done

# Block operations outside project directory (optional)
PROJECT_DIR=$(pwd)
if echo "$COMMAND" | grep -qE "cd\s+[^.]|cd\s+/(?!home)" ; then
    echo '{"decision": "ask", "reason": "Command navigates outside project directory"}'
    exit 0
fi

# Allow command to proceed
exit 0
```

#### Write Safety Hook (`~/.claude/hooks/write-safety.sh`)

```bash
#!/bin/bash

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Protected paths
PROTECTED_PATTERNS=(
    "^/etc/"
    "^/usr/"
    "^/bin/"
    "^/sbin/"
    "^\\.env$"
    "^\\.env\\."
    "^.*\\.pem$"
    "^.*\\.key$"
    "^.*_rsa$"
    "^package-lock\\.json$"
    "^yarn\\.lock$"
    "^pnpm-lock\\.yaml$"
)

for pattern in "${PROTECTED_PATTERNS[@]}"; do
    if echo "$FILE_PATH" | grep -qE "$pattern"; then
        echo '{"decision": "ask", "reason": "Protected file: '"$FILE_PATH"'"}'
        exit 0
    fi
done

exit 0
```

#### Session Summary Hook (`~/.claude/hooks/session-summary.sh`)

```bash
#!/bin/bash

# Log session end with summary
TIMESTAMP=$(date +%Y-%m-%d_%H:%M:%S)
LOG_FILE="$HOME/.claude/session-logs/$TIMESTAMP.log"

mkdir -p "$HOME/.claude/session-logs"

# Get git diff if in a repo
if git rev-parse --git-dir > /dev/null 2>&1; then
    echo "=== Session End: $TIMESTAMP ===" >> "$LOG_FILE"
    echo "" >> "$LOG_FILE"
    echo "=== Files Changed ===" >> "$LOG_FILE"
    git diff --name-only >> "$LOG_FILE"
    echo "" >> "$LOG_FILE"
    echo "=== Diff Summary ===" >> "$LOG_FILE"
    git diff --stat >> "$LOG_FILE"
fi

exit 0
```

### Making Hooks Executable

```bash
chmod +x ~/.claude/hooks/*.sh
```

### The “Safe YOLO” Alias

Add to your shell config (`~/.bashrc` or `~/.zshrc`):

```bash
# Safe YOLO mode - permissions skipped but hooks protect you
alias claude-yolo="claude --dangerously-skip-permissions"

# Extra safe - also run in Docker
alias claude-sandbox="docker run -it -v $(pwd):/workspace anthropic/claude-code --dangerously-skip-permissions"
```

---

## 5. Pattern 4: Context Hygiene

### Understanding Context Degradation

Context isn’t just about running out of tokens—quality degrades long before you hit limits:

| Context % | Quality   | Recommendation                            |
| --------- | --------- | ----------------------------------------- |
| 0-40%     | Excellent | Full attention, great recall              |
| 40-60%    | Good      | Start being selective about new context   |
| 60-80%    | Degraded  | “Lost in the middle” effects begin        |
| 80-95%    | Poor      | Frequent mistakes, forgotten instructions |
| 95-100%   | Critical  | Auto-compact triggers, context lost       |

### Disable Auto-Compact

Auto-compact is convenient but opaque. You don’t control what gets summarized, and critical details can be lost.

**Recommendation**: Manage compaction manually.

Add to your `CLAUDE.md`:

```markdown
## Context Management Rules

- NEVER auto-compact. I will manage context manually.
- When context exceeds 70%, warn me immediately.
- Include a "Context: XX%" note in your responses when above 50%.
```

### The /context Status Pattern

Create `~/.claude/commands/status.md`:

```markdown
---
description: Show current context status and recommendations
---

Provide a context status report:

## Context Status

- **Current Usage**: [X]% of context window
- **Estimated Tokens**: [X]k / 200k
- **Files in Context**: [list main files]
- **Conversation Turns**: [X]

## Health Assessment

- [ ] Under 50%: ✅ Healthy
- [ ] 50-70%: ⚠️ Consider clearing soon
- [ ] Over 70%: 🔴 Clear recommended

## Recommendations

[If over 50%, suggest what could be cleared or compacted]

## Key Context to Preserve

[List the most important things that should survive a /clear]
```

### The “Double-Escape Time Travel” Pattern

This is the most underutilized feature in Claude Code:

1. **Press Escape once**: Interrupts current Claude operation
1. **Press Escape twice**: Opens the **Rewind** interface

The Rewind interface lets you:

- See your full conversation history with diffs
- Select ANY previous point to restore to
- Restore BOTH code AND conversation state
- Explore alternative approaches without losing work

### Context Management Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   1. Start Fresh: /clear                                    │
│      └── Begin with clean context                           │
│                                                             │
│   2. Work Phase: Write code, iterate                        │
│      └── Monitor: "what's my context usage?"                │
│                                                             │
│   3. Checkpoint (at 50%): Document state                    │
│      └── Save important decisions to CLAUDE.md or notes     │
│                                                             │
│   4. Continue or Clear (at 70%):                            │
│      ├── Option A: /compact with specific instructions      │
│      └── Option B: /clear + restore from notes              │
│                                                             │
│   5. Emergency: Double-Escape                               │
│      └── Rewind to any previous state                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Smart Compaction Command

Create `~/.claude/commands/smart-compact.md`:

```markdown
---
description: Compact context with explicit preservation rules
---

Perform a smart compaction:

## MUST PRESERVE (never summarize away):

1. Current task/goal
2. All file paths mentioned in last 10 messages
3. Any explicit decisions or constraints I stated
4. Error messages and their solutions
5. The current plan/checklist if one exists

## CAN SUMMARIZE:

1. Exploration that led to dead ends
2. Verbose output from commands (keep just the conclusion)
3. File contents that haven't been modified
4. General discussion that led to decisions (keep just decisions)

## FORMAT:

After compaction, start your next message with:
```

📦 Context compacted. Preserved:

- [key item 1]
- [key item 2]
- [current goal]

```
Now perform /compact with these rules in mind.
```

---

## 6. Pattern 5: Subagent Control

### The Default Problem

Claude Code spawns subagents for various tasks, but by default may use cheaper/faster models (Sonnet, Haiku) even when you’re paying for Opus. This leads to:

- Lower quality analysis for “research” tasks
- Inconsistent code quality between main agent and subagents
- Wasted context when subagent returns poor results

### Force Opus Subagents

Add to your global `~/.claude/CLAUDE.md`:

```markdown
## Subagent Rules

- **ALWAYS use Opus for subagents** unless I explicitly request otherwise
- Subagents should be used for:
  - Research and investigation tasks
  - Parallel analysis of multiple files
  - Code review of changes
  - Test generation
  - Documentation writing
- Before spawning a subagent, tell me what it will do
- After subagent completes, summarize its findings concisely
```

### Custom Subagent Collection

Create specialized subagents in `~/.claude/agents/`:

#### Code Reviewer (`~/.claude/agents/code-reviewer.md`)

```markdown
---
name: code-reviewer
description: Expert code review focusing on bugs, security, and maintainability
tools: Read, Grep, Glob
model: opus
---

You are a senior code reviewer with expertise in:

- Security vulnerabilities
- Performance issues
- Code maintainability
- Testing gaps

When reviewing code:

1. **First Pass - Critical Issues**
   - Security vulnerabilities (injection, auth, data exposure)
   - Logic errors that could cause bugs
   - Race conditions or concurrency issues

2. **Second Pass - Quality Issues**
   - Code duplication
   - Complex functions that need refactoring
   - Missing error handling
   - Unclear naming

3. **Third Pass - Suggestions**
   - Performance improvements
   - Better patterns/abstractions
   - Documentation needs

Output format:
```

## Critical 🔴

- [file:line] Issue description

## Important 🟡

- [file:line] Issue description

## Suggestions 🟢

- [file:line] Suggestion

```
Be specific. Include line numbers. Suggest fixes.
```

#### Test Writer (`~/.claude/agents/test-writer.md`)

```markdown
---
name: test-writer
description: Writes comprehensive tests with edge case coverage
tools: Read, Write, Bash
model: opus
---

You are a testing expert. When writing tests:

## Principles

1. **Test behavior, not implementation**
2. **One assertion per test** (when practical)
3. **Descriptive test names**: "should_return_empty_array_when_input_is_null"
4. **Arrange-Act-Assert** structure
5. **Cover edge cases systematically**

## Edge Case Checklist

- [ ] Null/undefined inputs
- [ ] Empty strings/arrays/objects
- [ ] Boundary values (0, -1, MAX_INT)
- [ ] Invalid types
- [ ] Unicode/special characters
- [ ] Concurrent access (if applicable)
- [ ] Error conditions

## Test Structure
```

describe(’[Unit Under Test]’, () => {
describe(’[Method/Function]’, () => {
describe(‘when [condition]’, () => {
it(‘should [expected behavior]’, () => {
// Arrange
// Act  
// Assert
});
});
});
});

```
Match existing test patterns in the codebase.
```

#### Architecture Analyst (`~/.claude/agents/architect.md`)

````markdown
---
name: architect
description: Analyzes codebase architecture and suggests improvements
tools: Read, Grep, Glob
model: opus
---

You are a software architect. When analyzing code:

## Analysis Framework

### 1. Dependency Analysis

- Map module dependencies
- Identify circular dependencies
- Find highly-coupled components
- Locate god objects/modules

### 2. Pattern Recognition

- What architectural patterns are used?
- Are they applied consistently?
- What patterns are missing that would help?

### 3. Scalability Assessment

- Bottleneck identification
- Horizontal scaling readiness
- Database/storage patterns

### 4. Maintainability Score

Rate 1-10 with justification:

- Code organization
- Separation of concerns
- Test coverage
- Documentation

## Output Format

```markdown
# Architecture Analysis: [Component/System]

## Current State

[Diagram or description]

## Strengths

-

## Concerns

-

## Recommendations

1. [Priority] Description
2. [Priority] Description

## Suggested Refactoring Roadmap

Phase 1: [Quick wins]
Phase 2: [Medium effort]
Phase 3: [Major refactoring]
```
````

```
### Orchestrator Pattern

For complex tasks, use a main agent + specialized subagents:
```

┌─────────────────────────────────────────────────────────────┐
│ Main Agent (Opus) │
│ - Task planning │
│ - Decision making │
│ - Result synthesis │
└─────────────────────────────────────────────────────────────┘
│
┌───────────────────┼───────────────────┐
│ │ │
▼ ▼ ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ code-reviewer│ │ test-writer │ │ architect │
│ (Opus) │ │ (Opus) │ │ (Opus) │
└─────────────┘ └─────────────┘ └─────────────┘

```
### Subagent Monitoring Dashboard

See [Section 8](#8-subagent-monitoring-dashboard) for complete implementation.

---

## 7. Pattern 6: The Reprompter System

### The Problem with Typing Prompts

- High-quality prompts take time to type
- Typing interrupts flow state
- Easy to forget important constraints
- Inconsistent prompt quality

### The Solution: Voice → Structure Pipeline
```

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Voice │────▶│ Clarifying │────▶│ Structured │
│ Dictation │ │ Questions │ │ Prompt │
└──────────────┘ └──────────────┘ └──────────────┘
│ │ │
│ │ │
Raw idea Refinement XML-tagged
(messy) (dialog) (optimal)

````
### Implementation

#### 1. Voice Input Setup

Use your OS dictation or a tool like:
- macOS: Built-in dictation (Fn Fn)
- Windows: Windows Speech Recognition
- Cross-platform: Whisper API, Talon

#### 2. Reprompter Command (`~/.claude/commands/reprompt.md`)

```markdown
---
description: Convert rough voice input into a structured prompt
argument-hint: [rough-idea]
---

I'm going to give you a rough, voice-dictated idea. Your job is to:

## Step 1: Understand
Ask me clarifying questions to understand:
- What is the specific goal?
- What are the constraints?
- What does success look like?
- What context do I need to provide?

Ask ONE question at a time. Wait for my answer.

## Step 2: Structure
Once you understand, create a structured prompt using this format:

```xml
<task>
  <goal>[Clear, specific objective]</goal>

  <context>
    <files>[Relevant files to read]</files>
    <background>[Key context]</background>
  </context>

  <constraints>
    <must>[Required elements]</must>
    <must_not>[Forbidden elements]</must_not>
  </constraints>

  <output>
    <format>[Expected output format]</format>
    <success_criteria>[How to verify success]</success_criteria>
  </output>
</task>
````

## Step 3: Confirm

Show me the structured prompt and ask if it captures my intent correctly.

---

My rough idea: $ARGUMENTS

````
#### 3. Quick Reprompt for Simple Tasks

Create `~/.claude/commands/qr.md` (quick reprompt):

```markdown
---
description: Quick reprompt - one clarifying question, then execute
argument-hint: [task]
---

Task: $ARGUMENTS

Before executing, ask me ONE clarifying question to ensure you understand the most critical aspect of this task.

After I answer, proceed with execution.
````

### Example Session

```
You: /reprompt I need to like refactor the auth thing to use that new pattern we discussed, you know the one with the middleware

Claude: I want to make sure I understand correctly. When you say "the new pattern with middleware," are you referring to:
1. A specific middleware pattern we discussed earlier in this session?
2. A pattern documented somewhere in your codebase?
3. A general middleware authentication pattern (like JWT validation middleware)?

You: Number 2, it's in docs/auth-v2.md

Claude: Got it. One more question: Should this refactoring:
A) Replace the existing auth system entirely
B) Run alongside it temporarily (migration path)
C) Just update specific components?

You: A, full replacement

Claude: Here's your structured prompt:

<task>
  <goal>Refactor authentication system to use the pattern defined in docs/auth-v2.md</goal>

  <context>
    <files>docs/auth-v2.md, src/auth/**, src/middleware/**</files>
    <background>Full replacement of existing auth - no parallel running</background>
  </context>

  <constraints>
    <must>Follow patterns exactly as documented in auth-v2.md</must>
    <must>Maintain all existing auth-protected routes</must>
    <must>Include migration for existing user sessions</must>
    <must_not>Leave any deprecated auth code active</must_not>
  </constraints>

  <output>
    <format>Modified files with new auth implementation</format>
    <success_criteria>All existing tests pass, new auth tests added, documented in CHANGELOG</success_criteria>
  </output>
</task>

Does this capture your intent? Ready to proceed?
```

---

## 8. Subagent Monitoring Dashboard

A simple React-based dashboard for monitoring subagent activity.

### Installation

```bash
# Create the monitoring directory
mkdir -p ~/.claude/monitoring
cd ~/.claude/monitoring

# Create package.json
npm init -y
npm install react react-dom next tailwindcss
```

### Dashboard Code (`~/.claude/monitoring/pages/index.tsx`)

```tsx
import React, { useState, useEffect } from "react";

interface SubagentLog {
  timestamp: string;
  agentName: string;
  task: string;
  model: string;
  tokensUsed: number;
  duration: number;
  status: "running" | "completed" | "failed";
  result?: string;
}

interface SessionStats {
  totalTokens: number;
  totalDuration: number;
  agentBreakdown: Record<string, number>;
}

export default function Dashboard() {
  const [logs, setLogs] = useState<SubagentLog[]>([]);
  const [stats, setStats] = useState<SessionStats | null>(null);

  useEffect(() => {
    // Poll for updates every 2 seconds
    const interval = setInterval(() => {
      fetchLogs();
    }, 2000);

    fetchLogs();
    return () => clearInterval(interval);
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await fetch("/api/logs");
      const data = await res.json();
      setLogs(data.logs);
      setStats(data.stats);
    } catch (e) {
      console.error("Failed to fetch logs:", e);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "running":
        return "bg-yellow-500";
      case "completed":
        return "bg-green-500";
      case "failed":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">🤖 Subagent Monitor</h1>

      {/* Stats Panel */}
      {stats && (
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-gray-400 text-sm">Total Tokens</h3>
            <p className="text-2xl font-bold">
              {stats.totalTokens.toLocaleString()}
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-gray-400 text-sm">Total Duration</h3>
            <p className="text-2xl font-bold">
              {(stats.totalDuration / 1000).toFixed(1)}s
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-gray-400 text-sm">Active Agents</h3>
            <p className="text-2xl font-bold">
              {logs.filter((l) => l.status === "running").length}
            </p>
          </div>
        </div>
      )}

      {/* Agent Breakdown */}
      {stats && (
        <div className="bg-gray-800 p-4 rounded-lg mb-8">
          <h3 className="text-lg font-semibold mb-4">Token Usage by Agent</h3>
          <div className="space-y-2">
            {Object.entries(stats.agentBreakdown).map(([agent, tokens]) => (
              <div key={agent} className="flex items-center">
                <span className="w-32 text-sm">{agent}</span>
                <div className="flex-1 bg-gray-700 rounded h-4">
                  <div
                    className="bg-blue-500 h-4 rounded"
                    style={{ width: `${(tokens / stats.totalTokens) * 100}%` }}
                  />
                </div>
                <span className="w-24 text-right text-sm">
                  {tokens.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Activity Log */}
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <h3 className="text-lg font-semibold p-4 border-b border-gray-700">
          Activity Log
        </h3>
        <div className="divide-y divide-gray-700 max-h-96 overflow-y-auto">
          {logs.map((log, i) => (
            <div key={i} className="p-4 hover:bg-gray-750">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span
                    className={`w-2 h-2 rounded-full ${getStatusColor(log.status)}`}
                  />
                  <span className="font-medium">{log.agentName}</span>
                  <span className="text-gray-400 text-sm">({log.model})</span>
                </div>
                <span className="text-gray-400 text-sm">{log.timestamp}</span>
              </div>
              <p className="text-sm text-gray-300 mb-2">{log.task}</p>
              <div className="flex space-x-4 text-xs text-gray-500">
                <span>⏱ {log.duration}ms</span>
                <span>📊 {log.tokensUsed} tokens</span>
              </div>
              {log.result && log.status === "completed" && (
                <div className="mt-2 p-2 bg-gray-900 rounded text-sm">
                  {log.result.substring(0, 200)}...
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### Log Collection Hook

Add to your hooks configuration to feed the dashboard:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Task",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/monitoring/log-subagent.sh start"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Task",
        "hooks": [
          {
            "type": "command",
            "command": "~/.claude/monitoring/log-subagent.sh complete"
          }
        ]
      }
    ]
  }
}
```

### Log Script (`~/.claude/monitoring/log-subagent.sh`)

```bash
#!/bin/bash

ACTION=$1
INPUT=$(cat)
TIMESTAMP=$(date -Iseconds)
LOG_FILE="$HOME/.claude/monitoring/logs/$(date +%Y-%m-%d).json"

mkdir -p "$HOME/.claude/monitoring/logs"

AGENT_NAME=$(echo "$INPUT" | jq -r '.tool_input.description // "unknown"')
MODEL=$(echo "$INPUT" | jq -r '.model // "unknown"')
TASK=$(echo "$INPUT" | jq -r '.tool_input.prompt // ""' | head -c 200)

if [ "$ACTION" = "start" ]; then
    echo "{\"timestamp\": \"$TIMESTAMP\", \"agentName\": \"$AGENT_NAME\", \"model\": \"$MODEL\", \"task\": \"$TASK\", \"status\": \"running\"}" >> "$LOG_FILE"
elif [ "$ACTION" = "complete" ]; then
    RESULT=$(echo "$INPUT" | jq -r '.result // ""' | head -c 500)
    TOKENS=$(echo "$INPUT" | jq -r '.tokens_used // 0')
    echo "{\"timestamp\": \"$TIMESTAMP\", \"agentName\": \"$AGENT_NAME\", \"model\": \"$MODEL\", \"status\": \"completed\", \"result\": \"$RESULT\", \"tokensUsed\": $TOKENS}" >> "$LOG_FILE"
fi

exit 0
```

---

## 9. Quick Reference Table

### Keyboard Shortcuts

| Shortcut        | Action                         |
| --------------- | ------------------------------ |
| `Escape`        | Interrupt current operation    |
| `Escape Escape` | Open Rewind (time travel)      |
| `Shift + Tab`   | Toggle Plan Mode / Auto-accept |
| `Ctrl + C`      | Exit Claude Code               |
| `↑` / `↓`       | Navigate prompt history        |

### Essential Commands

| Command        | Purpose               | When to Use                         |
| -------------- | --------------------- | ----------------------------------- |
| `/clear`       | Clear conversation    | Starting new task, context bloat    |
| `/compact`     | Summarize context     | Approaching 70% usage               |
| `/context`     | Show context usage    | Regular monitoring                  |
| `/rewind`      | Time travel UI        | Made a mistake, want to undo        |
| `/help`        | List all commands     | Forgot command names                |
| `/model`       | Switch model          | Cost optimization, capability needs |
| `/agents`      | Manage subagents      | Configure custom agents             |
| `/permissions` | View/edit permissions | Troubleshooting tool access         |
| `/hooks`       | Manage hooks          | Review/update safety rules          |

### Context Management Thresholds

| Context % | Status      | Action                               |
| --------- | ----------- | ------------------------------------ |
| 0-40%     | 🟢 Healthy  | Work freely                          |
| 40-60%    | 🟡 Watch    | Be selective about new files         |
| 60-80%    | 🟠 Caution  | Consider compacting                  |
| 80-95%    | 🔴 Critical | /clear or targeted /compact          |
| 95-100%   | ⛔ Danger   | Auto-compact triggers (uncontrolled) |

### Model Selection Guide

| Model      | Best For                                       | Cost | Speed  |
| ---------- | ---------------------------------------------- | ---- | ------ |
| Opus 4.5   | Architecture, complex reasoning, critical code | $$$  | Slow   |
| Sonnet 4.5 | Most coding tasks, balanced                    | $$   | Medium |
| Haiku 4.5  | Quick queries, simple tasks, exploration       | $    | Fast   |

### File Locations

| Path                          | Purpose                             |
| ----------------------------- | ----------------------------------- |
| `~/.claude/CLAUDE.md`         | Global instructions                 |
| `~/.claude/settings.json`     | Global settings, hooks              |
| `~/.claude/commands/`         | Personal slash commands             |
| `~/.claude/agents/`           | Custom subagents                    |
| `.claude/CLAUDE.md`           | Project instructions (team)         |
| `.claude/settings.json`       | Project settings (team)             |
| `.claude/settings.local.json` | Local project settings (gitignored) |
| `.claude/commands/`           | Project slash commands              |
| `.claude/agents/`             | Project subagents                   |

### Safety Hook Checklist

| Hook Type                 | Recommended Use          |
| ------------------------- | ------------------------ |
| `PreToolUse:Bash`         | Block dangerous commands |
| `PreToolUse:Write`        | Protect sensitive files  |
| `PostToolUse:Write(*.py)` | Auto-format Python       |
| `PostToolUse:Write(*.ts)` | Auto-format + typecheck  |
| `PostToolUse:Edit`        | Run linters              |
| `Stop`                    | Session summary logging  |

### Prompt Quality Checklist

Before sending a prompt, verify:

- [ ] **Goal is specific**: What exactly should happen?
- [ ] **Context is provided**: What files/info does Claude need?
- [ ] **Constraints are explicit**: What must/must not happen?
- [ ] **Success criteria defined**: How do I know it’s done?
- [ ] **Examples given**: For complex patterns, show don’t tell

### Error Recovery Flowchart

```
Issue Detected
      │
      ▼
  Small/Local? ────Yes────▶ Escape Escape (Rewind)
      │                           │
      No                    Pick restore point
      │                           │
      ▼                           ▼
  Code broken? ────Yes────▶ git checkout / git stash
      │
      No
      │
      ▼
  Context rot? ────Yes────▶ /clear + restart with notes
      │
      No
      │
      ▼
  Log to error journal for pattern analysis
```

---

## Appendix: CLAUDE.md Template

Copy this to your project root and customize:

```markdown
# Project: [NAME]

## Overview

[2-3 sentences describing the project]

## Tech Stack

- Language: [e.g., TypeScript 5.3]
- Framework: [e.g., Next.js 14]
- Database: [e.g., PostgreSQL + Prisma]
- Testing: [e.g., Jest + React Testing Library]

## Key Commands

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run test` - Run tests
- `npm run lint` - Run linter

## Project Structure
```

src/
├── app/ # Next.js app router
├── components/ # React components
├── lib/ # Utilities and helpers
├── hooks/ # Custom React hooks
└── types/ # TypeScript types

```
## Coding Standards
- Use functional components with hooks
- Prefer named exports over default exports
- One component per file
- Tests go in `__tests__/` directories

## Important Patterns
- State management: [describe pattern]
- API calls: [describe pattern]
- Error handling: [describe pattern]

## DO NOT
- Modify files in `node_modules/`
- Commit to main directly
- Skip tests for new features

## Subagent Rules
- Always use Opus for subagents
- Announce before spawning subagents
- Summarize subagent results concisely

## Context Management
- Warn when context exceeds 60%
- Include "Context: X%" in responses when >50%
- Never auto-compact without asking
```

---

_Guide version 1.0 | Last updated: January 2026_
taken from: https://pastebin.com/Hy59QYnC
