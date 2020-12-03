let express = require('express');

let app = express();

let data = require('./employees.json')

app.get('/employees', (req, res) => {
    if (!data) {
        res.status(404).send('Could not find information.')
    }

    res.send(data)

})

app.get('/employees/:employeeId', (req, res) => {
    if (!data) {
        res.status(404).send('Could not find information.')
    }

    const findEmployee = data.employees.find(function (employee) {
        
        return parseInt(req.params.employeeId) === employee.employeeId;
    })

    res.send(findEmployee)

})



app.listen('3000')