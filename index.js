import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "sentance",
        type: "input",
        message: "Enter your sentance to count words:"
    }]);
const words = answers.sentance.trim().split(" ");
console.log(words);
console.log(`your count words is:${words.length}`);
