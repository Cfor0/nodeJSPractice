let fs = require('fs')

fs.readFile('./planets.txt', (err, data) => {
    if (err) throw err;
    const text = data.toString();
    console.log(text)
})

