function classifyGrade(score) {
  if (score >= 90 && score <= 100) {
      return "Отлично";
  } else if (score >= 70 && score <= 89) {
      return "Хорошо";
  } else if (score >= 50 && score <= 69) {
      return "Удовлетворительно";
  } else if (score < 50) {
      return "Неудовлетворительно";
  } 
}


let score = 85; 
console.log(classifyGrade(score));
