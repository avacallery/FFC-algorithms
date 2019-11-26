function factorialize(number) { 
    if (number <= 0) {
        return 1; 
    } else {
        return (number = number * factorialize(number - 1));
    }
}
console.log(factorialize(10));

function factoralizeUsingLoop(number) {
    let total = 1; 
    for (let i = 1; i <= number; i++) {
        total *= i; 
    }
    return total;
}
console.log(factoralizeUsingLoop(6));