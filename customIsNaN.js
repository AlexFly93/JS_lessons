function customIsNaN(value) {
  return value !== value;
}

console.log(customIsNaN(Math.sqrt(-1)))
console.log(customIsNaN('string'));
console.log(customIsNaN(10));
console.log(customIsNaN(NaN));
console.log(customIsNaN(undefined));