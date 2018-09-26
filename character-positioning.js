function countCharacters(string) {
  let cArr = string.replace(/\s/g, "").split('');
  let result = {};
  cArr.forEach((s, pos) => (s in result) ? result[s].push(pos) : result[s] = [pos]);
  return result;
}

console.log(countCharacters("lighthouse in the house"));