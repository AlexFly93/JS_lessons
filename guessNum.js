import { question } from "readline-sync";

//Напишите функцию guessNumber, которая принимает строчку от пользователя через prompt() и сравнивает его со случайно сгенерированным числом от 1 до 10 (включительно). Функция должна выводить 'Угадали!', если пользователь угадал число, или 'Попробуйте снова!', если нет. Учитывайте преобразования типов и условные конструкции.

function guessNumber() {
  let randomNumber = Math.ceil(Math.random() * 10) + 1;

  let userInput = +question("Enter you number:\n");

  if (
    userInput !== null &&
    !isNaN(userInput) &&
    userInput >= 1 &&
    userInput <= 10
  ) {
    if (userInput === randomNumber) {
      console.log("Yep, you did it!");
    } else {
      console.log("Try again!");
    }
  } else {
    console.log("WTF is that?");
  }
}

guessNumber();
