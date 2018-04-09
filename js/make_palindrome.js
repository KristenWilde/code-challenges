/*# You are an avid collector of palindromes browsing the string store to make a new
# purchase for your collection. Unfortunately though, you don't seem to be finding
# many palindromes for sale. But wait! What if you could rearrange a word to make it
# a palindrome? Then it would be worth buying. Write a method that accepts a string
# and rearranges the string's characters to return a new string that is a palindrome.
# If the input string cannot form a palindrome, then return false.

i: string
o: palindrome string or false

r:
- assume lowercase letters only
- to form a palindrome, there can be one letter that has an odd number.
  all others must have an even number.

a:
- determine if it can be a palindrome, otherwise return false.
  - use loop to generate array of arrays ['a', 'a'], ['b', 'b']
  - sort by length
  - if only one has odd length, assign to variable 'odd'
  - if more than one array has odd length, return false. 

- iterate through arrays, taking half the letters from each to build a string.
- place 1 letter from 'odd' on the string.
- iterate backwards through arrays, adding to the string.
*/

function palindrome_factory(string) {
  var letterArrays = {}
  string.split('').forEach(function(letter){
    if (!letterArrays[letter]) {
      letterArrays[letter] = [letter]
    }
    else letterArrays[letter].push(letter)
  })
  
  var arraysOfLetters = Object.values(letterArrays)
  var oddArrays = arraysOfLetters.filter(function(ar){
    return (ar.length % 2 === 1)
  })
  if (oddArrays.length > 1) return false
  var oddArray = oddArrays[0];

  var evenArrays = arraysOfLetters.filter(function(ar){
    return ar != oddArray;
  })

  var palindrome = ''
  evenArrays.forEach(function(ar) {
    let half = ar.length / 2
    palindrome += ar.splice(0, half).join("")
  })

  if (oddArray) {
    palindrome += oddArray.pop()
  }

  evenArrays.reverse();
  evenArrays.forEach(function(ar) {
    palindrome += ar.join("");
  })

  return palindrome
}

console.log(palindrome_factory("aabb")) //  # => "abba"  // [['a','a']['b','b']]
console.log(palindrome_factory("accacac")) // # => "accacca"
console.log(palindrome_factory("d")) // # => "d" // 1
console.log(palindrome_factory("accacacbb")) // # => "abccaccba" 
console.log(palindrome_factory("aabbccdd")) // # => "abcddcba"
console.log(palindrome_factory("acacac")) //  # => false // 1
console.log(palindrome_factory("abca")) //  # => false

