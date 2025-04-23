function reverseString(string){
  const stringLog = string.split('').reverse().join('');
    console.log(stringLog)
}
reverseString("youssef") // fessuoy
// console.log(reverseString("youssef"))

function isPalindrome(word){
    const reversed = word.split('').reverse().join('');
    const result = word === reversed;
    console.log(result);
}
isPalindrome("hello") // false
isPalindrome("level") // true