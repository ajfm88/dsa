// function findMissingLetter(arr) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const startIndex = alphabet.indexOf(arr[0]);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== alphabet[startIndex + i]) {
//       return alphabet[startIndex + i];
//     }
//   }

//   return "";
// }

function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);

    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }

    start = current;
  }

  return "";
}

module.exports = findMissingLetter;
