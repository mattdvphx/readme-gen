const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");


// * At least one badge
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions

const promptQuestions = [
  {
    type: "input",
    name: "gitHubId",
    message: "What is your GitHub id?"
  },
  {
    type: "input",
    name: "projectTitle",
    message: "give a name to your project?"
  },
  {
    type: "input",
    name: "description",
    message: "write description for the project"
  },
  {
    type: "input",
    name: "installation",
    message: "how will you install it?"
  },
  {
    type: "input",
    name: "usage",
    message: "what will this project be used for?"
  },
  {
    type: "checkbox",
    name: "license",
    message: "what type of license for this project?",
    choices:[
      "MIT",
      "Apache_2.0",
      "Gpl_3.0",
      "Bsd3",
      "Other"
    ]
  },
  {
    type: "input",
    name: "contributors",
    message: "who are the contributors for this project?"
  },
  {
    type: "input",
    name: "tests",
    message: "tests?"
  },
  {
    type: "input",
    name: "questions",
    message: "questions?"
  }
]

function promptUser(){
  return inquirer.prompt(promptQuestions);
}

async function startProgram(){
  const data = await promptUser(); 
  const queryUrl = `https://api.github.com/users/${data.githubName}`;



  data.profilepic = await axios.get(queryUrl).then(function(response){
    return response.data.avatar_url;
  })

  data.email = await axios.get(queryUrl).then(function(response){
    return response.data.email;
  })

  
  const readmemarkdown = generateMarkdown(data);
  fs.writeFileSync("newReadme.md", readmemarkdown);
}

startProgram();