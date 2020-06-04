function calculateLeapYear(number) {
  if (number % 4 === 0) {
    return true;
  } else if (number % 100 !== 0 && number % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(calculateLeapYear(2024));
