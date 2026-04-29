/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false;
    
    s_chars = {}
    t_chars = {}

    for (let i = 0; i < s.length; i++) {
        s_chars[s[i]] = (s_chars[s[i]] || 0) + 1
        t_chars[t[i]] = (t_chars[t[i]] || 0) + 1
    }

    for (const char in s_chars) {
        if (s_chars[char] !== t_chars[char])
            return false;
    }

    return true;
};