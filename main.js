let number1 = 2;
let number2 = 2;

function mymath(num1, num2) {
    let sum = num1 + num2;
    let odej = num1 - num2;
    let multiply = num1 * num2;

    if (sum >= 0) {
        console.log("Wynik dodawania wynosi " + sum);
    }
    else {
        console.log("Wynik jest nieprawidłowy");
    }
    if (odej >= 0) {
        console.log("Wynik odejmowania wynosi " + odej);
    }
    else {
        console.log("Wynik jest nieprawidłowy");
    }
    if (multiply >= 0) {
        console.log("Wynik mnożenia wynosi " + multiply);
    }
    else {
        console.log("Wynik jest nieprawidłowy");
    }
}
mymath(-2, 2);