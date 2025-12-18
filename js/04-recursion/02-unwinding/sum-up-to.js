function sumUpTo(n) {
  if (n <= 1) {
    console.log(`sumUpTo(${n}) returns ${n}`);
    return n;
  }

  console.log(`sumUpTo(${n}) calls sumUpTo(${n - 1} + ${n})`);
  const result = n + sumUpTo(n - 1);
  console.log(`sumUpTo(${n}) returns ${result}`);
  return result;
}

module.exports = sumUpTo;
