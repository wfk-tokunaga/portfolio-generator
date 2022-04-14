const inquirer = require('inquirer');
console.log(inquirer);

inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    }
    ])
    .then(answers => {
        console.log(answers);
    });

// // console.log("Go T-Wolves!");
// const fs = require('fs');
// // We now have access to all of the file system methods


// const generatePage = require('./src/page-template.js');

// // const profileDataArgs = process.argv.slice(2, process.argv.length);
// // const [name, github] = profileDataArgs;

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portflio complete! Check out index.html to see the output.');
// })


