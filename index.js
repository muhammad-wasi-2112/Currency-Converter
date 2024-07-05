#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.grey.bold(`---------${(chalk.magentaBright.bold("Currency Converter"))}---------`));
do {
    const currency = {
        USD: 1,
        GBP: 0.91,
        EUR: 0.76,
        INR: 74.57,
        PKR: 280,
    };
    let answer = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            message: chalk.grey.bold("Enter your currency"),
            choices: ["USD", "GBP", "EUR", "INR", "PKR"]
        },
        {
            name: "to",
            type: "list",
            message: chalk.grey.bold("Enter to currency"),
            choices: ["USD", "GBP", "EUR", "INR", "PKR"]
        },
        {
            name: "amount",
            type: "number",
            message: chalk.grey.bold("Enter your amount"),
        }
    ]);
    let fromAmount = currency[answer.from];
    let toAmount = currency[answer.to];
    let amount = answer.amount;
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    console.log(chalk.yellowBright.bold(convertedAmount));
} while (true);
