//Вывести на экран сумму чисел от 1 до 100 включительно, не кратных 3.

//Условия выполнения ДЗ

//Не использовать функции или другие материалы, которые мы не изучали
//Старайтесь делать ДЗ самостоятельно и не смотреть какие-либо подсказки

function sumExcludeThree() {

  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    i % 3 !== 0 ? sum += i : sum;
  }
  return sum
}
console.log('sum numbers from 1 to 100, which are not multiplies of 3 = ' + sumExcludeThree())