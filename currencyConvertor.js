//1. Задача: Конвертер валют

//Задание: Напишите функцию convertCurrency, принимающую сумму в долларах США (USD) и код валюты, в которую нужно конвертировать ('EUR', 'UAH', 'GBP'). Функция должна возвращать сумму в указанной валюте, используя фиксированные курсы валют (например, 1 USD = 0.9 EUR, 1 USD = 35 UAH, 1 USD = 0.8 GBP). Если код валюты не поддерживается, функция должна возвращать строку с ошибкой.

function convertCurrency(amountUSD, currencyCode) {
  if (currencyCode === 'EUR') {
      return amountUSD * 0.9;
  } else if (currencyCode === 'UAH') {
      return amountUSD * 35;
  } else if (currencyCode === 'GBP') {
      return amountUSD * 0.8;
  } else {
      return "Ошибка: Код валюты не поддерживается";
  }
}
console.log(convertCurrency(100,'GBP'))