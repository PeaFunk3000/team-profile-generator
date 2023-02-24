const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Name
// Employee ID
// Email address
// Office number
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the Manager's name?",
      name: "MrManager",
    },
    {
      type: "number",
      message: "What is the Manager's ID?",
      name: "manID",
    },
    {
      type: "input",
      message: "What is the Manager's email?",
      name: "manEmail",
    },
    {
      type: "number",
      message: "What is the Manager's office number?",
      name: "manID",
    },
  ])

  .then((response) => {
    
  });

//   {
//     type: "list",
//     message: "What to do next?",
//     name: "",
//     choices: ["Finish Team", "Add Engineer", "Add Intern",],
//   },