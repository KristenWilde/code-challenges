/*
https://www.hackerrank.com/challenges/grading/problem
input: array of grades (1 to 60)
output: array of rounded grades

- grades are 0-100, integers
- g < 40 is failing
- if g < 38, no rounding occurs as the result will still be failing.
- if the difference between the grade and the next multiple of 5
is less than 3, round up to the next multiple of 5.

73 -> 75-grade < 3 so 75.
67 -> 70-grade !< 3 so 67.
38 -> 40-grade < 3 so 40.
33 -> grade < 38 so 33.

Approach:
- if grade < 38, keep grade.
- function isMultipleOf5.
- try adding 1, check isMultipleOf5.
  if so, return.
- try adding 1 again, check isMultipleOf5.
  if so, return.
- otherwise return grade.

*/

function gradingStudents(grades) {
  return grades.map(grade => round(grade));
}

function round(grade) {
  if (grade < 38) {
    return grade;
  }
  let i = 0;
  let newGrade = grade;
  while (i < 3) {
    if (newGrade % 5 === 0) {
      return newGrade;
    }
    newGrade++;
    i++;
  }
  return grade;
}

console.log(gradingStudents([73,67,38,33,89,90,95]))