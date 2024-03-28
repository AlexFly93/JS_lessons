//Задача: Определение дня недели

const { randomInt } = require("crypto");

//Задание: Создайте функцию getDayOfWeek, которая принимает число от 1 до 7 и возвращает название дня недели, где 1 – это понедельник, а 7 – воскресенье. Если введенное число не соответствует ни одному дню недели, функция должна возвращать строку с ошибкой.

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Error: Are you fucking kidding me???";
  }
}

const num = Math.floor(Math.random()*7)+1
//округлить вниз до ближайшего целочисленного(рандомное число()до7)от 1
console.log(getDayOfWeek(num));