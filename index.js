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
    // return new Promise ((resolve, reject) => {
      
      let mdFile = `# The Title is ${answers.title}
      ## the description is ${answers.description}`
    fs.writeFile('README.md', mdFile, function(err) {
  //  resolve(console.log('wrote to file'))

  //  reject(err)
    
 
  })
})
  // })