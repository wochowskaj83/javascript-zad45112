function mySum(a1, b1) {
    let result = a1 + b1;
    return "Wynik dodawania wynosi " + result;
}
function myMultiply(a1, b1) {
    let result = a1 * b1;
    return "Wynik mnożenia wynosi " + result;
}
function mySubtracting(a1, b1) {
    let result = a1 - b1;
    if (result > 0) {
        return "Wynik odejmowania wynosi " + result;
    }
    else {
       return "Wynik jest nieprawidłowy";
    }
}

console.log(mySum(2, 3));
console.log(myMultiply(2, 3));
console.log(mySubtracting(2, 3));