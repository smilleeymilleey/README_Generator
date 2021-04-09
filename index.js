const inquirer = require('inquirer');
const fs = require('fs');
const gen = require("./utils/generateMarkdown");
const licenseList = ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"];


start();

function start(){
  questionUsers();
}

function questionUsers() {
  inquirer
  .prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title", 
    },
    { 
       type: "input",
       message: "Give a description of your poject",
       name: "description",
     }, 
    { 
       type: "input",
       message: "How do you install your application?",
       name: "install",
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

    function writeToFile(fileString) {
      const fileName = "README.md";
    
      fs.writeFile(fileName, fileString, (err) =>
        err ? console.log(err) : console.log("Generating README.md...")
      );
    }

 