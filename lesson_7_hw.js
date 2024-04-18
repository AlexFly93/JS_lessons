/*
1. Написать функцию, которая преобразует строку в массив слов, сортирует его в алфавитном порядке и возвращает (в массиве не должно быть пробелов, как элементов)
 */

const str = "Это свободный текст для создания массива слов ";
function stringToArray(str) {
  // Твой код
  let words = str.toLowerCase().split(" ");
  words = words.filter((word) => word.trim() !== "");
  words.sort((a, b) => a.localeCompare(b));
  return words;
}

console.log(stringToArray(str)); // выводит [ 'для', 'массива', 'свободный', 'слов', 'создания', 'текст', 'это' ]

/*
2. Написать функцию, которая удаляет из массива элементы, которые дублируются и возвращает массив оригинальных элементов, отсортированных по возростанию
 */
const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];
function removeDuplicatesAndSort(arr) {
  // Твой код
  const newArray = [];

  arr.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });

  newArray.sort((a, b) => a - b);

  return newArray;
}

console.log(removeDuplicatesAndSort(initialArray)); // выводит [ 1, 4, 5, 6, 7, 34, 66, 1000 ]
/*
3. Написать функцию, которая вернет массив парных чисел
 */
const initialArray2 = [2, 3, 6, 7, 9, 12];
function arrayOfEvens(arr) {
  // Твой код
  const evenArr = [];

  arr.forEach((elem) => {
    if (elem % 2 === 0) {
      evenArr.push(elem);
    }
  });

  return evenArr;
}

console.log(arrayOfEvens(initialArray2)); // выводит [ 2, 6, 12 ]

/*
4. Написать функцию, которая сформирует массив из последовательности чисел, формируя его из аргумента, который увеличивает каждый следующий элемент последовательности на самого себя. Максимальное значение массива не должно превышать 30.
 */
function createArray(element) {
  // Твой код
  const result = [];
  let currentValue = element;

  while (currentValue <= 30) {
    result.push(currentValue);
    currentValue += element;
  }

  return result;
}

console.log(createArray(5)); // вывод [ 5, 10, 15, 20, 25, 30 ]
console.log(createArray(3)); // вывод [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]
