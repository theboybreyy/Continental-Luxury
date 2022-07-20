// Create and Write to File 
fs.writeFile(
    path.join(__dirname, '/test', 'hello.py'), 'Hello World, this is a Python File!', err => {
        if (err) throw console.warn(err);
        console.log('File written to...');


        // File Append
        fs.appendFile(
            path.join(__dirname, '/test', 'script.ex'),
            'I love Node JS',
            err => {
                if (err) throw console.warn(err);
                console.log('File written to...')
            });
    });
