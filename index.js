const inquirer = require('inquirer');

const fs = require('fs');

const path = require('path');

const employee = require('../lib/employee');

const  Manager = require('../lib/manager');

const intern = require('../lib/intern');

const engineer = require('../lib/engineer');

const company = [];

function Information() {
    inquirer.prompt([
       
    {
        message: 'what is your employees name?',
        name: 'name'
    },
    {
        type: 'list',
        message: 'What is your employees role?',
        type: 'role',
        choices: [
            'Engineer',
            'Intern',
            'Manager',
            'Employee'
        ]
    }
])
.then(({name, id, email, role}) => {
if (role === 'engineer') {}

if (name === 'engineer') {}
    
if (id === 'engineer') {}
    
if (email === 'engineer'){}    

}) 

.then (({ response, next }) => { response.push(new engineer(name, id, email , role))})
if (company) {
return Information();
} if (response.confirm === "intern");


}



