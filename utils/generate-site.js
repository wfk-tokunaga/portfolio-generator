const fs = require('fs');

// Promises have 3 states:
// Pending
// Fail
// Success
// is a function that returns a promise
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        })
    });
}


/*
Okay, so here's what's going on:

A promise takes two functions as parameters, resolve and reject
These are specified LATER ON when a user is using that promise with .then() and .catch()
For example, I might
*/

// writeFile(sampleHtml).then(successfulResponse => {
//     // THIS IS THE RESOLVE FUNCTION
//     //do blah 
// })

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!',
            })
        })
    })
};


module.exports = { writeFile, copyFile };