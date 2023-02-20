// create employee scheema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        //male female or other
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    
});
const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;