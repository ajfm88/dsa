function sumOfEvenSquares(numbers) {
  const evenSquares = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, square) => sum + square, 0);

  return evenSquares;
}

module.exports = sumOfEvenSquares;
