# 📗 Module 5. Logic and Control Flow - Lesson 05.01: Module Review - Calculator Project Challenge
## 📝 Step 4: Project Challenge – Simple Calculator Function

---

## 🎯 Objective

Build a JavaScript function that performs one of four basic math operations based on user input:
- Addition
- Subtraction
- Multiplication
- Division

---

## 🔧 Inputs

- `num1` – First number (e.g., 5)
- `num2` – Second number (e.g., 3)
- `operator` – A string: `"add"`, `"subtract"`, `"multiply"`, `"divide"`

---

## 🧠 Logic & Features

- Handles input case-insensitively (e.g., `"ADD"` or `"add"`)
- Handles divide-by-zero error
- Rounds division results to two decimal places using `.toFixed(2)`
- Includes two implementation styles: `if/else` and `switch`

---

## ✅ Implementation 1: Using `if/else`

```javascript
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
        return "Unknown operation";
    }
}
```

---

## 🧪 Sample Calls

```javascript
console.log(calculate(5, 3, "ADD"));         // 8
console.log(calculate(5, 3, "subTract"));    // 2
console.log(calculate(5, 3, "multiply"));    // 15
console.log(calculate(5, 3, "DiViDe"));      // 1.67
```

---

## ✅ Implementation 2: Using `switch`

```javascript
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
```

---

## 🧪 Sample Calls

```javascript
console.log(calculate2(7, 4, "ADD"));        // 11
console.log(calculate2(7, 4, "subTract"));   // 3
console.log(calculate2(7, 4, "multiply"));   // 28
console.log(calculate2(7, 4, "DiViDe"));     // 1.75
```

---

## 📌 Summary

This project demonstrates how to:
- Use control flow (`if/else`, `switch`)
- Handle string normalization and error checking
- Build a user-friendly calculator logic structure
- Return clear and consistent outputs

🎆 Mastered conditionals and arithmetic in a practical, real-world context!
