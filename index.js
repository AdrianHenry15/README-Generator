// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
            type: "input",
            message: "What is the title of your project?",
            name: "Title"
        },
        {
            type: "input",
            message: "Give a short description of your project: ",
            name: "Description"
        },
        {
            type: "input",
            message: "What does the user need to install to run this app?",
            name: "Installation"
        },
        {
            type: "input",
            message: "How can a user use this project?",
            name: "Usage"
        },
        {
            type: "input",
            message: "Add your references and collaborators here: ",
            name: "Credits"
        },
        {
            type: "checkbox",
            message: "What type of license was used for this project?",
            name: "License",
            choices: ["GNU", "Apache 2.0", "BSD", "MIT"]
        },

        {
            type: "input",
            message: "Who contributed to this project?",
            name: "Contribution"
        },
        {
            type: "input",
            message: "How would you test this application?",
            name: "Tests"
        },
        {
            type: "input",
            message: "Contact me with any questions",
            name: "Questions"
        },
        {
            type: "input",
            message: "Enter your GitHub: ",
            name: "GitHub"
        },
        {
            type: "input",
            message: "Enter your email: ",
            name: "Email"
        },
        {

        }
    ]
    // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data))
            console.log(data)
        })
};

// // Function call to initialize app
init();