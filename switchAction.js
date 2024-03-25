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

let action = "вычесть";
let num1 = 5;
let num2 = 3;

let result = calculate(action, num1, num2);
console.log(result);