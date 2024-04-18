// Напишите функцию на JavaScript, которая принимает строку, выделяет из нее все целые числа (игнорируя дробные числа), преобразует их из текстового формата в числовую и вычисляет их общую сумму.

// Требования:

// Функция должна итерировать каждый символ во входной строке.
// Используйте цикл для просмотра каждого символа и сбора полных целочисленных значений.
// Игнорируйте нечисловые символы и дробные числа при исчислении суммы целых чисел (если у нас встречается запись 123.23 - то сумма должна быть 146, 123+23=146).
// После определения каждого целого числа добавьте его в общую сумму.
// Не использовать массивы и регулярные выражения для решения
// console.log(sumIntegersInString("123.45px-67 8.9")); // Выведет 118, суммируя 123, 45, -67, 8 и 9

function sumStringElements(str) {
  let sum = 0;
  let currentNumber = "";
  let isNegative = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "-") {
      isNegative = true;
      continue;
    }

    if (!isNaN(char) && char !== " ") {
      currentNumber += char;
    } else if (currentNumber !== "") {
      sum += isNegative ? -parseInt(currentNumber) : parseInt(currentNumber);
      isNegative = false;

      currentNumber = "";
    }
  }
  if (currentNumber !== "") {
    sum += parseInt(currentNumber);
  }
  return sum;
}
const string = "123.45px-67 8.9";
console.log(sumStringElements(string));
