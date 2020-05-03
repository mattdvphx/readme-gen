const inquirer = require("inquirer");
const fs = require("fs");
const until = require("until");
const writeFileAsync = util.promisify(fs.writeFile); 

function promptUser() {
     return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your GitHub id?"
      },
      {
        type: "input",
        name: "repository",
        message: "give a name to your repository?"
      },
      {
        type: "input",
        name: "details",
        message: "write some details for the project"
      },
      {
        type: "input",
        name: "user interface",
        message: "how will this project help the user?"
      }
      
    ]);
  }

function writeToFile(fileName, data) {
}

function init() {

}

init();