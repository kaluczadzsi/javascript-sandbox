function palindrome(word) {
  return word.toLowerCase() === word.split('').reverse().join('').toLowerCase();
}

module.exports = palindrome;
