
const inquirer = require('inquirer');

const fs = require('fs');

const path = require('path');

const employee = require('../lib/employee');

const  manager = require('../lib/manager');

const intern = require('../lib/intern');

const engineer =require('../lib/engineer');

const company = [];

function Information() {
    inquirer.prompt([
        
    {
        message: 'what is your employees name?',
        name: 'name'
    },
    {

    },
    {

    },
    {
        type: 'list',
        message: 'What is your employees role?',
        type: 'role',
        choices: [
            'engineer',
            'intern',
            'manager',
            'employee'
        ]
    }
])
.then(({name, id, email, role}) => {
if (role === 'engineer') {
    {
        'do you want to add another employee'
    }
}
if (name === 'engineer') {}
    
if (id === 'engineer') {} 
    
if (email === 'engineer'){}    

}) 
.then (({ responses, next }) => { company.push(new engineer(name, id, email , github))})
if (next) {
return Information();
} if (role === "intern");
}