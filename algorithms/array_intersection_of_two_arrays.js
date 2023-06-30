// Problem
// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays
// and you may return the result in any order.

// Approach: Hash Map
// We collect numbers and their counts from one of the arrays into a hash map.
// Then, we iterate along the second array, and check if the number exists in the hash map and its count is positive.
// If so - add the number to the result and decrease its count in the hash map.
// For our solutions here, we use one of the arrays to store the result (if modification of input is allowed).
// As we find common numbers, we copy them to the first array starting from the beginning.

// Time Complexity: O(n+m), where n and m are the lengths of the arrays.
// We iterate through the first, and then through the second array;
// insert and lookup operations in the hash map take a constant time.
// Space Complexity: O(min(n,m)).
// We use hash map to store numbers (and their counts) from the smaller array.
const intersect = function(nums1, nums2) {
  // check array sizes and use a hash map for the smaller array
  // in order to reduce memory usage when one of the arrays is very large.
  if (nums1.length > nums2.length) {
    intersect(nums2, nums1)
  }

  const map = new Map();
  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  // index of the found common numbers to be added at the beginning of the first array.
  let k = 0
  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      nums1[k++] = n
      map.set(n, map.get(n) - 1);
    }
  }
  return nums1.slice(0, k)
};

const intersect2 = function(nums1, nums2) {
  // check array sizes and use a hash map for the smaller array
  // in order to reduce memory usage when one of the arrays is very large.
  if (nums1.length > nums2.length) {
    intersect2(nums2, nums1)
  }
  const map = {};
  for (let n of nums1) {
    map[n] = map[n] ? map[n]+1 : 1
  }

  const result = []
  for (let m of nums2) {
    if (map[m] > 0) {
      result.push(m)
      map[m]--
    }
  }
  return result
};

// result.push(n);
// map.set(n, map.get(n) - 1);
// return result;

// Input:
const nums1 = [1,2,2,1]
const nums2 = [2,2]
// Output: [2,2]

// Input:
const nums3 = [4,9,5]
const nums4 = [9,4,9,8,4]
// Output: [4,9] or [9,4] is also accepted.

console.log(intersect2(nums1, nums2))
console.log(intersect2(nums3, nums4))
