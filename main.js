#! /usr/bin/env node
import inquirer from "inquirer";
// printing a wellcome message
console.log("\n\t Welcome To \`MY First Project\` -true-guide-simple-calculator");
// Asking questions from users through inquirer
let answers = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "firstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select One Operator To Perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statements if-else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
