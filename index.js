// Readme Generator

// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const gen = require("./utils/generateMarkdown.js");

// Array of licenses for list choices
const licenseList = ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"];

// Function call to initialize app
init();

// Initialize app
function init() {
  promptUsers();
}

// Function definitions
function promptUsers() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter the title of your project: ",
      },
      {
        type: "input",
        name: "description",
        message: "Enter the description of your project: ",
      },
      {
        type: "input",
        name: "install",
        message: "Enter the installation instructions: ",
      },
      {
        type: "input",
        name: "usage",
        message: "Enter instructions and examples for usage: ",
      },
      {
        type: "input",
        name: "filepath",
        message: "Enter the path to the screenshot: ",
      },
      {
        type: "input",
        name: "contributers",
        message: "Enter a list of contributers: ",
      },
      {
        type: "input",
        name: "test",
        message: "Enter test instructions: ",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license: ",
        choices: licenseList,
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address: ",
      },
      {
        type: "input",
        message: "Enter your github username: ",
        name: "github",
      },
    ])
    .then((data) => {
      let fileString = gen.generateMarkdown(data);
      writeToFile(fileString);
    });
}

// Write file
function writeToFile(fileString) {
  const fileName = "README.md";

  fs.writeFile(fileName, fileString, (err) =>
    err ? console.log(err) : console.log("Generating README.md...")
  );
}