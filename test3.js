let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];

//TODO: Please write down a function to console log unique value from this array.

/**
 * Find unique values in items
 * @param {number[]} items 
 * @return {number[]}
 */
function getUniqueNumber(items) {
  const set = new Set(items)
  return [...set]
  // return Array.from(set)
}

console.log(getUniqueNumber(items))
