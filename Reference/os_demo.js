const fs = require('fs');
const path = require('path');

// Create and Write to File 
fs.writeFile(
    path.join(__dirname, '/test', 'osm_demo.js'), 'This is an OS Module File.', err => {
        if (err) throw console.warn(err);
        console.log('File written to...');


        // // File Append
        // fs.appendFile(
        //     path.join(__dirname, '/Reference', 'script.ex'),
        //     'I love Node JS',
        //     err => {
        //         if (err) throw console.warn(err);
        //         console.log('File written to...')
        //     });
    });
