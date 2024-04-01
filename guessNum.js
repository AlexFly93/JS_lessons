import { question } from "readline-sync";

//Напишите функцию guessNumber, которая принимает строчку от пользователя через prompt() и сравнивает его со случайно сгенерированным числом от 1 до 10 (включительно). Функция должна выводить 'Угадали!', если пользователь угадал число, или 'Попробуйте снова!', если нет. Учитывайте преобразования типов и условные конструкции.

//Ограниченное количество попыток: Пользователь имеет ограниченное количество попыток, например 3 попытки, чтобы угадать число. Использовать рекурсию, а не циклы.
//Совет: Если пользователь вводит число, которое не совпадает с заданным, но остались попытки, функция подсказывает: "слишком большое" или "слишком малое".
//Валидация ввода: Убедитесь, что пользователь ввел действительное число в нужном диапазоне (от 1 до 10). Если введенное значение недействительно, просьба ввести число снова не считая это как попытку.

let randomNumber = Math.ceil(Math.random() * 10) + 1;
function guessNumber(triesLeft) {
  let userInput = +question("Enter you number:\n");

  if (
    userInput !== null &&
    !isNaN(userInput) &&
    userInput >= 1 &&
    userInput <= 10
  ) {
    if (userInput === randomNumber) {
      console.log("Lucky bastard!");
    } else {
      console.log(userInput > randomNumber ? "Too high" : "Too low");
      if (triesLeft > 1) {
        guessNumber(triesLeft - 1);
      } else {
        console.log("Looser! The correct number was " + randomNumber);
      }
    }
  } else {
    console.log("WTF is that? I need number from 1 to 10, dumb ass");
    guessNumber(triesLeft);
  }
}

guessNumber(3);
