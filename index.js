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
  const queryUrl = (githubName) => `https://api.github.com/users/${githubName}`;

  const githubapi = {
    
    gitProfilePic: async function(githubName) {
    const url = queryUrl(githubName);
    const {data: {avatar_url}} = await axios.get(url);
    return avatar_url;
},
gitEmail: async function(githubName) {
    const url = `https://api.github.com/users/${githubName}/events/public`;
    const res = await axios.get(url);
    return res.data[0].payload.commits[0].author.email;
}

  }

  data.avatar_url = await githubapi.gitProfilePic(data.githubName);
  data.email = await githubapi.gitEmail(data.githubName);
  const readmemarkdown = generateMarkdown(data);
  fs.writeFile("newReadme.md", readmemarkdown);
}

startProgram();