const reverseString = function(str) {
  return str === undefined || '' ? '' : str.trim().split("").reverse().join("");
}

export default reverseString;
