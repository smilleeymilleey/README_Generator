function renderLicenseSection(license) {
    let licenseBadge = "";
  
    switch (license) {
      case 'MIT':
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
        break;
      case 'APACHE_2.0':
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case 'GPL_3.0':
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case 'BSD_3':
        licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "None":
        licenseBadge = "";
        break;
      default:
        licenseBadge = "";
    }
  
    return licenseBadge;
  }
  
  // Generate markdown text
  function generateMarkdown(data) {
    let licenseBadge = renderLicenseSection(data.license);
   
    let fileString = `# ${data.title}
  ## ${licenseBadge}
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshot](#screenshot)
  - [Screencast](#screencast)
  - [License_Details](#license_details)
  - [Contributing](#contributing) 
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credit](#Credit)
  ## Installation
  To install the necessary dependencies run:
  \`\`\`
  npm i
  \`\`\`
  ${data.install}
  ## Usage
  \`\`\`
  ${data.usage}
  \`\`\`
  ## Screenshot
  ![Screenshot](${data.filepath})
  ## Screencast
  [Screencast Link](https://drive.google.com/file/d/1C3YnbmxYHFfXHA7f5l6QJ4cPqDTcfeZQ/view?usp=sharing)
  ## License_Details
  \`\`\`
  This project is licensed through: ${data.license}
  \`\`\`
  ## Contributing
  \`\`\`
  ${data.contributers}
  \`\`\`
  ## Tests
  \`\`\`
  ${data.test}
  \`\`\`
  ## Questions
  \`\`\`
  If you have questions about the repo, open an issue or contact me at 
  ${data.email}. You can find this project along with my other work 
  at https://github.com/${data.github}.
  \`\`\`
  #### Credit
  Lucas Himsel - license-badges.md - 
  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  `;
  
    return fileString;
  }
  
  module.exports = {generateMarkdown};