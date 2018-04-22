/*https://www.hackerrank.com/challenges/kangaroo/problem
You are choreograhing a circus show with various animals. For one act, you are 
given two kangaroos on a number line ready to jump in the positive direction 
(i.e, toward positive infinity).

The first kangaroo starts at location k1 and moves at a rate of m1 meters per jump.
The second kangaroo starts at location k2 and moves at a rate of m2 meters per jump.
You have to figure out a way to get both kangaroos at the same location as part 
of the show.

Complete the function kangaroo which takes starting location and speed of both 
kangaroos as input, and return YES or NO appropriately. Can you determine if the 
kangaroos will ever land at the same location at the same time? The two kangaroos 
must land at the same location after making the same number of jumps.

Input Format
A single line of four space-separated integers denoting the respective values of 
k1, m1, k2, m2.

Constraints
k1 and k2 are both between 0-10,000 inclusive
m1 and m2 anre both between 1-10,000 inclusive

Output Format
Return YES if they can land on the same location at the same time; otherwise, return
 NO.

Note: The two kangaroos must land at the same location after making the same number 
of jumps.

Sample Input
0 3 4 2

position after jumps:
jumps  0 1
k1     0 3 6 9  12               
k2.    4 6 8 10 12

YES

Sample input:
0 2 5 3

position after jumps:
jumps 0 1 2. 3
k1.   0 2 4  6
k2.   5 8 11 14
- No because k2 > k1 and m2 > m1
- If the one with bigger jumps is ahead of the other, the other will never catch up.

Approach:
assign all values to variables.
- faster, slower
loop until the faster is ahead of the slower.
If they are at the same point during the loop, return YES
Otherwise, return NO.

- Handle m2 === m1
  - if k1 === k2, YES, otherwise NO.
*/

function kangaroo(k1, m1, k2, m2) {
  if (m2 === m1) {
    return (k1 === k2) ? 'YES' : 'NO';
  }

  let faster, fSpeed, slower, sSpeed;
  [faster, fSpeed, slower, sSpeed] = (m1 > m2) ? [k1, m1, k2, m2] : [k2, m2, k1, m1]
   
  while (faster < slower) {
    faster += fSpeed;
    slower += sSpeed;   
    if (faster === slower) {
      return 'YES'
    }
  }
  return 'NO'
}

