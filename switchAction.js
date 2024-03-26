//Задача 2: Выбор действия (решается с помощью switch-case)
//Задание: У вас есть строка с действием ("добавить", "вычесть", "умножить", "разделить") и два числа. Напишите блок кода, выполняющего выбранное действие с этими числами и выводящий результат.

function calculate(action, num1, num2) {
  switch (action) {
    case "добавить":
      return num1 + num2;
    case "вычесть":
      return num1 - num2;
    case "умножить":
      return num1 * num2;
    case "разделить":
      return num1 / num2;
    default:
      return "error";
  }
}

const action = "вычесть";
const num1 = 5;
const num2 = 3;

const result = calculate(action, num1, num2);
console.log(`action: ${action}\nfirst number: ${num1}\nsecond number: ${num2}\nresult: ${result}`);
