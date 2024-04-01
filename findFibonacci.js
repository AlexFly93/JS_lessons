//Задание: Напишите функцию fibonacci, принимающую число n в качестве аргумента и возвращающего n-е число из последовательности Фибоначчи. Последовательность начинается с 0 (нулевой элемент) и 1 (первый элемент), а каждое следующее число представляет собой сумму двух предыдущих чисел.

const n = Math.ceil(Math.random() * 100);
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr;
  }
}
console.log(fibonacci(n));
console.log(n);
