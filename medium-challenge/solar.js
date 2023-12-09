// Create a node application that will read all of the planets in the solar system 
//from a text file and print them to the console.

// need to load in fs
// need to read file
// need to console.log

// console.log('test')


const fs = require('fs') // fs has methods i can use to read file
        // path ,        encoding , callback
fs.readFile('planets.txt', 'utf8', (err, dataInFile) => {
    if (err){
        console.log('error lol');
    }else{
        console.log(dataInFile)
    }
    
})

// i did that all by myself i feel so smart




 