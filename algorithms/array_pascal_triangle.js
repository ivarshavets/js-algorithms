// Problem: Pascal's Triangle
// Find and return the nth row of Pascal's triangle in the form a list. n is 0-based.
// For example, if n = 5, then output = [1, 4, 6, 4, 1].
//     1         row 0     1
//    1 1        row 1     1 1
//   1 2 1       row 2     1 2 1
//  1 3 3 1      row 3     1 3 3 1
// 1 4 6 4 1     row 4     1 4 6 4 1

// Approach: Dynamic Programming
// The iterative approach can be classified as dynamic programming because
// we construct each row based on the previous row.
// The elements of n^th row, except for the first and last element, are made up of elements of (n-1)^th row:
// triangle[row][col] = triangle[row-1][col-1] + triangle[row-1][col]
// This comes up till the 1^st row. We will follow a top-down approach.

// Time complexity: O(numRows^2)
// Although updating each value of triangle happens in constant time, it is performed O(numRows^2)times.
// There are overall two loop iterations. The outer loop obviously runs numRows times,
// but for each iteration of the outer loop, the inner loop runs rowNum times.

// Space complexity: O(1)
// While O(numRows^2) space is used to store the output,
// the input and output generally do not count towards the space complexity.

const generatePascalTriangle = function(numRows) {
  // First row of the triangle
  const triangle = [[1]]
  // Building rows
  for (let rowNum = 1; rowNum < numRows; rowNum++) {
    const row = []
    // The first and the last row elements are always 1
    row[0] = 1
    row[rowNum] = 1
    // Each triangle element is equal to the sum of the elements
    // above-and-to-the-left and above-and-to-the-right.
    for (let j = 1; j < rowNum; j++) {
      row[j] = triangle[rowNum-1][j-1] + triangle[rowNum-1][j]
    }
    triangle.push(row)
  }
  return triangle
}

const generatePascalTriangle_2 = function(numRows) {
  const triangle = [[1]]
  for (let rowNum = 1; rowNum < numRows; rowNum++) {
    // Set the curRow from previous iteration as the prevRow
    let prevRow = triangle[rowNum-1]
    // first element of the row
    const currRow = [1]
    for (let j = 1; j < rowNum; j++) {
      currRow[j] = prevRow[j-1] + prevRow[j]
    }
    // last element of the row
    currRow.push(1)
    triangle.push(currRow)
  }
  return triangle
}

// numRows = 5 => output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// numRows = 1 => output: [[1]]
console.log(generatePascalTriangle(5))
