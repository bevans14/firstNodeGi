const fs = require('fs')
const express = require('express')
const app = express();
const port = 3000;

// exporting
const employeeData = require('./employees.json')
const data = JSON.stringify(employeeData)
fs.writeFileSync('employees.json', data, 'utf8' )


app.get('/', (req, res) => {
res.json(`${employeeData}`)
})


app.listen(port, () => {
    console.log(`${employeeData.name}`)
})