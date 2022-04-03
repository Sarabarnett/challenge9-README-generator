// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please give a description of your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What steps are necessary to install your project?'
  },
  {
    type: 'input',
    name: 'useage',
    message: 'How is your project used?'
  },
  {
    type: 'checkbox',
    name:'license',
    message:'What kind of license does your project use?',
    choices: [
      'MIT', 'Apache', 'GPL'
    ]
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'How can others contribute to your project?'
  },
  {
    type: 'input',
    name: 'tests',
    message:'How can a user test your application?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, input) {
  return writeFileAsync(fileName, input);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((input) => {
      readmeContent = generateMarkdown(input);
      writeToFile("README.md", readmeContent);
    })
};

// Function call to initialize app
init();