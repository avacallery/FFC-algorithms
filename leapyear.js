function calculateLeapYear(number) {
  if (number % 4 === 0 && (number % 100 !== 0 || number % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(calculateLeapYear(1900));
console.log(calculateLeapYear(1600));
console.log(calculateLeapYear(2020));
console.log(calculateLeapYear(2024));
