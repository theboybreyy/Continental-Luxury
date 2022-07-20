const fs = require('fs');
const path = require('path');

// Create Folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw console.warn(err);
//     console.log('Folder Created Successfully')
// });

// Create and Write to File 
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.py'), 'Hello World, this is a Python File!', err => {
//         if (err) throw console.warn(err);
//         console.log('File written to...');


//         // File Append
//         fs.appendFile(
//             path.join(__dirname, '/test', 'script.ex'),
//             'I love Node JS',
//             err => {
//                 if (err) throw console.warn(err);
//                 console.log('File written to...')
//             });
//     });



// // Read File
// fs.readFile(path.join(__dirname, '/test', 'hello.py'), 'utf-8', (err, data) => {
//         if (err) throw console.warn(err);
//         console.log(data);
//     });



// Rename A File
fs.rename(
    path.join(__dirname, '/test', 'script.py'),
    path.join(__dirname, '/test', 'app.py'),
    err => {
        if (err) throw err;
        console.log('File renamed successfully...');
    });