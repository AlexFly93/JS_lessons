// ﻿ДЗ 2

// Проверка теории вероятности. Напишите функцию, которая будет генерировать определенное количество случайных чисел в диапазоне от 100 до 1000 включительно. Подсчитать количество четных и нечетных среди них. Вычислить процентное соотношение – будет ли оно близко к 50%50? Пример функции checkProbabilityTheory(count). Параметр count будет указывать, сколько раз будет генерироваться случайное число.

// Условия выполнения ДЗ

// Функция выводит информацию
// Количество сгенерированных чисел: количество чисел
// Парных чисел: количество четных чисел
// Не четных чисел: количество не четных чисел
// Процент парных к не четным:

function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    const rndNum = Math.ceil(Math.random() * 900 + 100);
    if (rndNum % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const percentOfEven = Math.round((evenCount / count) * 100);
  const percentOfOdd = Math.round((oddCount / count) * 100);

  console.log(count);
  console.log(evenCount);
  console.log(oddCount);
  console.log(`${percentOfEven} / ${percentOfOdd}`);
}

checkProbabilityTheory(25);
