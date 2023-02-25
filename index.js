const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

const commonQs = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "number",
    message: "What is the employee's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
];

const managerOffice = {
  type: "number",
  message: "What is the Manager's office number?",
  name: "office",
};

const engiGithub = {
  type: "input",
  message: "What is the Engineers's GitHub?",
  name: "github",
};

const internSchool = {
  type: "input",
  message: "What is the Intern's school name?",
  name: "school",
};

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Name
// Employee ID
// Email address
// Office number

console.log("Welcome to Your Team Profile Generator!");

const getEmployeeInfo = (response) => {
  const questionsToAsk = [...commonQs];
  switch (response) {
    case "Add Manager":
      console.log("Now enter the Manager Info");
      questionsToAsk.push(managerOffice);
      break;
    case "Add Engineer":
      console.log("Now enter the Engineer Info");
      questionsToAsk.push(engiGithub);
      break;
    case "Add Intern":
      console.log("Now enter the Intern Info");
      questionsToAsk.push(internSchool);
      break;
  }
  inquirer.prompt(questionsToAsk).then((answers) => {
      let newEmployee
    
    switch (response) {
      case "Add Manager":
        newEmployee = new Manager(answers.name, answers.id, answers.email, answers.office)
        break;
      case "Add Engineer":
        newEmployee = new Engineer(answers.name, answers.id, answers.email, answers.github)
        break;
      case "Add Intern":
        newEmployee = new Intern(answers.name, answers.id, answers.email, answers.school)
        break;
    }
    teamMembers.push(newEmployee);
    whatNext();
  });
};

const whatNext = () => {
  inquirer
    .prompt({
      type: "list",
      message: "What to do next?",
      name: "next",
      choices: ["Add Manager", "Add Engineer", "Add Intern", "Finish Team"],
    })
    .then((response) => {
      if (response.next === "Finish Team") {
        console.log("Thankyou for using Your Team Profile Generator! \n Your Team Pofile is now being generated...");
        writeHTML();
        process.exit();
      } else getEmployeeInfo(response.next);
    });
};

whatNext();

function writeHTML() {
  fs.writeFileSync(outputPath, render(teamMembers),"utf-8")
};

