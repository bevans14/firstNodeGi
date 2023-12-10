const express = require('express');
const fs = require('fs');
const employeeData= require('./employees.json')


  
// const employeeDataString = JSON.stringify(employeeDataBuffer)
// const employeeData = JSON.parse(employeeDataBuffer);

const app = express()

// send

app.get('', (req, res) => {
    res.send('just a regular page with no emplyee data at all :)')
})

app.get('/employees', (req, res) => {
    res.send(employeeData)
})


app.get('/employees/:employeeID', (req, res) => {
    const employeeID = parseInt(req.params.employeeID);
    
    const employee = employeeData.find(emp => emp.employeeID === employeeID);

    if (employee) {
        res.json(employee); 
    } else {
        res.status(404).json('404 error');
    }
});


// now need to start server

app.listen(3000, () => {
    console.log('server is up port 3000')
})

// port is still open until we close it








