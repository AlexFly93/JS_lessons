//Задача 1: Классификация оценок (решается с помощью if-else)
//Задание: У вас есть оценка от 1 до 100. Напишите блок кода, который классифицирует оценку: "отлично" для оценок от 90 до 100, "хорошо" для оценок от 70 до 89, "удовлетворительно" для оценок от 50 до 69, и "неудовлетворительно" для оценок менее 50

function classifyGrade(score) {
  if (score >= 90 && score <= 100) {
    return "Отлично";
  } else if (score >= 70 && score <= 89) {
    return "Хорошо";
  } else if (score >= 50 && score <= 69) {
    return "Удовлетворительно";
  } else if (score < 50 && score > 0) {
    return "Неудовлетворительно";
  } else {
    return "incorrect score"
  }
}

const score = 101;
console.log(classifyGrade(score));
