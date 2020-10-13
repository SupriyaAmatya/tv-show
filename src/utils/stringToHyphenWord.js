export const stringToHyphenWord = (word) => {
  return word.replace(/ +/g, '-').toLowerCase();
}