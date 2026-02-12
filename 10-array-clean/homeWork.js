function filterArray(arr, shouldRemove) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!shouldRemove(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5, 6];

const removeEven = (num) => num % 2 === 0;

const result = filterArray(numbers, removeEven);

console.log(result); 