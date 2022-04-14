const inquirer = require('inquirer');

// Will return a promise
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'about',
                message: 'Please provide some information about yourself.',
            }
        ]);
};

const promptProject = portfolioData => {
    // If portfolioData.projects doesn't exist yet, initialize it
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        return projectData.confirmAddProject ? promptProject(portfolioData) : portfolioData;
        // if (projectData.confirmAddProject) {
    });
};

// Therefor, we append the .then() method onto it
// Makes it so it doesn't handle the then inside the function 
// promptUser().then(answers => Object.values(answers).map(answer => console.log(answer)));
// promptUser()
//     .then(answers => console.log(answers))
//     .then(promptProject)
//     .then(projectAnswers => console.log(projectAnswers));
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData)
    });

// promptUser()
//     .then(answers => console.log(answers))
//     .then(promptProject)
//     .then(projectAnswers => {
//         console.log(projectAnswers)
//         if (projectAnswers.confirmAddProject) {
//             promptProject()
//         }
//     });


// promptUser()
//     .then(answers => {
//         // console.log(answers);
//         promptProject().then(projectAnswers => console.log(answers, projectAnswers));
//     });

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


