/*
Given the time in numerals we may convert it into words.

Write a program which prints the time in words for given hour and minute. The
outputs should match the test cases below exactly.

The first input, h, is the hour as it would appear on a digital clock. This value
 will always be between 1 and 12 (including 1 and 12).

The second input, m, is the number of minutes past the hour. It will be between
0 and 59 (including 0 and 59). 

For example, for 5:01 on a digital clock, the inputs would be 5 and 1.
For 4:45 on a digital clock, the inputs would be 4 and 45.
*/


console.log(timeInWords(5, 0)); //=== "five o'clock",
console.log(timeInWords(5, 1)); //=== "one minute past five",
console.log(timeInWords(5, 10)); //=== "ten minutes past five",
console.log(timeInWords(5, 15)); //=== "quarter past five",
console.log(timeInWords(5, 30)); //=== "half past five",
console.log(timeInWords(5, 40)); //=== "twenty minutes to six"
console.log(timeInWords(5, 45)); //=== "quarter to six",
console.log(timeInWords(5, 47)); //=== "thirteen minutes to six",
console.log(timeInWords(5, 28)); //=== "twenty eight minutes past five"


// 5, 47 ->
// Min over 30, 
//   so preposition = 'to'
//   so hour = numberWord[nextHour(h)]
//     ( nextHour returns h + 1, or h === 12, returns 1.)
//   minutes = minutePhrase(60 - m)
//     (minutePhrase -> if 0, o'clock | if 15, quarter | if 30, half | numberWord(min))
//. return minutePhrase + prepostion + hour

// 1, 15 
// if min 

// 12, 45

// 10, 5
// Min <= 30, so hour = word(h).
// Min not 15, 30, or 45, or 0, so use minutesPast -> "${word(m)} minutes past ${hour}" 

// 12, 0
// if m === 0, use oClock

// 8, 1
// if m === 1, use minutePast

function timeInWords(h,m) {
  nextHour = h => h === 12 ? 1 : h + 1;
  numberWord = [ 'zero', 'one','two','three','four','five','six',
                  'seven','eight','nine','ten','eleven','twelve',
                  'thirteen', 'fourteen', 'fifteen', 'sixteen',
                  'seventeen', 'eighteen', 'nineteen', 'twenty',
                  'twenty one', 'twenty two', 'twenty three', 'twenty four',
                  'twenty five', 'twenty six', 'twenty seven', 'twenty eight',
                  'twenty nine' ]
  minutePhrase = min => {
    switch(min) {
      case 15:
        return 'quarter';
      case 30:
        return 'half';
      case 1:
        return 'one minute'
      default:
        return numberWord[min] + ' minutes';
    }
  }

  // let hourWord;
  // let min;
  // let preposition;

  if (m === 0) { return numberWord[h] + " o'clock" }

  if (m <= 30) {
    return `${minutePhrase(m)} past ${numberWord[h]}`
  }

  return `${ minutePhrase(60 - m) } to ${ numberWord[nextHour(h)] }`

}