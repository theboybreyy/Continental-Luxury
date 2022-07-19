const fs = require('fs');
const path = require('path');

// Create Folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw console.warn(err);
//     console.log('Folder Created Successfully')
// });

// Create and Write to File 
fs.writeFile(path.join(__dirname, '/test', 'hello.py'), 'Hello World, this is a Python File!', err => {
    if (err) throw console.warn(err);
    console.log('File written to...')
});


fs.writeFile(path.join(__dirname, '/test', 'script.shell'), 'Hello World, this is a Python File!', err => {
    if (err) throw console.warn(err);
    console.log('File written to...')
});
