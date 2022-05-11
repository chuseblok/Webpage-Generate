const inquirer = require("inquirer");

const fs = require("fs");

const path = require("path");

const employee = require("../develop/lib/employee");

const manager = require("../develop/lib/manager");

const template = require("../develop/SRC/template");

const intern = require("../develop/lib/intern");

const engineer = require("../lib/engineer");
const { rejects } = require("assert");
const { group } = require("console");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");
const company = [];

function Information() {
  inquirer
    .prompt([
      {
        message: "what is your employees name?",
        name: "name",
      },
      {
        message: "what is your employees id?",
        name: "id",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
      },
      {
        type: "list",
        message: "What is your employees role?",
        type: "role",
        choices: ["engineer", "intern", "manager"],
      },
    ])
    .then(({ name, id, email, role }) => {
      if (role === "engineer") {
        return inquirer
          .prompt([
            {
              type: "text",
              name: "github",
              message: "waht is your github?",
            },
            {
              type: "confirm",
              name: "next",
              message: "woud you like to add another employee?",
            },
          ])
          .then(({ github, next }) => {
            company.push(new engineer(name, id, email, github));
            if (next) {
              return Information();
            }
          });
      }

      if (role === "intern") {
      }

      if (role === "manager") {
      }

      if (email === "engineer") {
      }
    })
    .then((data) => {
      return template(company);
    })
    .then((html) => {
      fs.writeFile("./index.html", html, (err) => {
        if (err) {
          rejects(err);
          return;
        }
      });
    });

  function Information() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberchoice",
          message: "Which type of team member would you like to add?",
          choices: [
            "engineer",
            "intern",
            "I don't want to add any more team members",
          ],
        },
      ])
      .then((choice) => {
        switch (choice.memberchoice) {
          case "engineer":
            addengineer();
            break;
          case "intern":
            addintern();
            break;
          default:
            group();
        }
      });
  }

  Information();
}
function group() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, render(company), "utf-8");
}

company();

appMenu();
