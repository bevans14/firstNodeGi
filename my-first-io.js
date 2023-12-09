
const fs = require('fs')
const bufferData = fs.readFileSync(process.argv[2]) 
const str = bufferData.toString()

const arr = str.split('\n')  

console.log(arr.length - 1)






