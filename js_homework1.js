console.log('number' + 3 + 3)
// Преобразование в строку: 'number' + '3' + '3' = 'number33'

console.log(null + 3)
// Преобразование null в число: 0 + 3 = 3

console.log(5 && "qwerty" + "40" + +"2" + "hillel")

console.log('10' - 5 === 6)
// '10' преобразуется в число: 10 - 5 = 5
// Сравнение: 5 === 6 - false

console.log(true + false)
// true преобразуется в 1, false в 0: 1 + 0 = 1

console.log('4px' - 3)
// Нельзя вычесть число из строки, возвращает NaN (Not a Number)

console.log('4' - 3)
// Преобразование строк в числа: 4 - 3 = 1

console.log('6' + 3**0)
//61, 3 в степени 0 = 1 и конкат

console.log(12 / '6')
// Преобразование строки в число: 12 / 6 = 2

console.log('10' + (5 === 6))
// Сравнение: 5 === 6 - ложь
// Преобразование числа в строку: '10' + 'false' = '10false'

console.log(null == '')
// null не приводится к числу, поэтому фолс

console.log(3**(9 / 3))
//27
// ** - возведение в степень 

console.log(!!'false' == !!'true')
// Преобразование строк в логические значения: false == false - true

console.log(0 || ("0" && 1(+null == false) < 1))
// ответ - false

(false && true) || true
// ответ - true

console.log(false && (false || true))
// Результат операции: false (левая часть оператора &&, которая является ложью)

console.log((+null == false) < 1 ** 5)
// Преобразование null в число: 0 == false - true
// Вычисление степени: 1 ** 5 = 1
// Сравнение: true < 1 - false