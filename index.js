const inquirer = require('inquirer');
const fs = require('fs');
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
    
   ])
    /* Pass your questions in here */
  
  .then(answers => {
 fs.writeFile('README.md', JSON.stringify(answers), function(err) {
    if (err) return console.log(err);
    console.log('wrote to file');
 
  })
  })