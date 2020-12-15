
// TODO: Implement the bubble sort algorithm

function bubbleSort (array) {
  let swapped = true
  while (swapped) {
    swapped = false
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const before = array[i]
        const after = array[i + 1]
        array[i] = after
        array[i + 1] = before
        swapped = true
      }
    }
  }
  return array
}

module.exports = bubbleSort
