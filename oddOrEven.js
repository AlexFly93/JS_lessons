//Задача 3: Проверка на четность (решается с помощью тернарного оператора)
//Задание: У вас есть число. Используйте тернарный оператор для проверки числа на четность. Выведите "четное", если число четное, и "нечетное" в противном случае.


function oddOrEven(num) {
  return num % 2 === 0 ? "четное" : "нечетное"
}

console.log(oddOrEven(7));
