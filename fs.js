const fs = require('fs');

fs.writeFile('message.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('The file has been saved!'); // Putting in the details for the file.
});

fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err; // This reads what's in the writeFile.
    console.log(data);
})