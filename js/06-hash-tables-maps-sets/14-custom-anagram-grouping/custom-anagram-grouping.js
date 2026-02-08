const HashTable = require("./HashTable");

function anagramGrouping(words) {
  const anagramGroups = new HashTable();

  for (const word of words) {
    const sortedChars = word.split("").sort().join("");

    if (anagramGroups.get(sortedChars)) {
      anagramGroups.get(sortedChars).push(word);
    } else {
      anagramGroups.set(sortedChars, [word]);
    }
  }
}

module.exports = anagramGrouping;
