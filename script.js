//TODO 📗 Module 5. Logic and Control Flow - Lesson 05.01: Module Review - Calculator Project Challenge


//TODO 📝 Step 4: Project Challenge – Simple Calculator Function

//* 🎯 Objective:
//  Build a function that performs a basic math operation (add, subtract, multiply, divide) on two numbers based on user input.

//* 🔧 Inputs to Simulate:
//  We should define:
//  • num1 → any number (e.g., 10)
//  • num2 → any number (e.g., 5)
//  • operator → a string: "add", "subtract", "multiply", "divide"

//* 🧠 Logic to Implement:
//  Use either:
//  • A switch statement, OR
//  • An if/else chain

//  and apply:
//? Operator                    Example Code                    Output
//  "add"                       num1 + num2                     15
//  "subtract"                  num1 - num2                     5
//  "multiply"                  num1 * num2                     50
//  "divide"                    num1 / num2                     2

//* ⚠️ Handle Edge Cases:
//  • If num2 is 0 and operator is "divide", return "Cannot divide by zero"
//  • If operator is invalid (e.g., "power"), return "Unknown operation"

//* 📌 Requirements:
//  • Use clear, readable logic with switch or if/else
//  • Console.log the result (or return it)
//  • Handle errors gracefully
//  • Keep your function named: calculate(num1, num2, operator)

//* 🧾 Stretch Goals (Optional):
//  • Return results with two decimal places (toFixed(2))
//  • Accept uppercase operators (e.g., "ADD" → "add")
//  • Add support for a "modulo" operator (%)


//! Pseudocode

/*
/// Define inputs

num1 = number
num2 = number
operator = string ("add", "subtract", "multiply", "divide")

FUNCTION calculate(num1, num2, operator):

    IF operator === "add":
        RETURN num1 + num2

    ELSE IF operator === "subtract":
        RETURN num1 - num2

    ELSE IF operator === "multiply":
        RETURN num1 * num2

    ELSE IF operator === "divide":
        IF num2 == 0:
            RETURN "Cannot divide by zero"
        ELSE:
            RETURN num1 / num2

    ELSE:
        RETURN "Unknown operation"
END FUNCTION
*/

//! Code - if/else

let num1;
let num2;
let operator = ["add", "subtract", "multiply", "divide"];

function calculate(num1, num2, operator) {
    operator = operator.toLowerCase();

    if (operator === "add") {
        return num1 + num2;
    } else if (operator === "subtract") {
        return num1 - num2;
    } else if (operator === "multiply") {
        return num1 * num2;
    } else if (operator === "divide") {
        if (num2 === 0) {
            return "Cannot divide by 0";
        } else {
            return (num1 / num2).toFixed(2);
        } 
    } else {
        return "Unknown operation"
    }
}

console.log(calculate(5, 3, "ADD"));
console.log(calculate(5, 3, "subTract"));
console.log(calculate(5, 3, "multiply"));
console.log(calculate(5, 3, "DiViDe"));


//! Code - switch

let a;
let b;
let operators = ["add", "subtract", "multiply", "divide"];

function calculate2(a, b, operator) {
    operator = operator.toLowerCase();

    switch (operator) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                return "Cannot divide by 0";
            } else {
                return (a / b).toFixed(2);
            }
        default:
            return "Invalid operator";
    }
}


console.log(calculate2(7, 4, "ADD"));
console.log(calculate2(7, 4, "subTract"));
console.log(calculate2(7, 4, "multiply"));
console.log(calculate2(7, 4, "DiViDe"));


























