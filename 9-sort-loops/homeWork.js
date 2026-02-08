// Реализовать сортировку
// Написать функцию, которая возвращает отсортированный массив
// по убыванию или возрастанию
// Сортировку нужно сделать циклами
// Нужно использовать цикл в цикле и сравнивать элементы и менять их местами
const arr = [1, 40, -5, 10, 0]


function sortArray(arr, direction) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {

      let shouldSwap = false
        if (direction === 'asc') {
        shouldSwap = arr[i] > arr[j]
      }
         if (direction === 'desc') {
        shouldSwap = arr[i] < arr[j]
      }
         if (shouldSwap) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
         }
  }
  return arr
}
console.log(sortArray(arr, 'asc'))
