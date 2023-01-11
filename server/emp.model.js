const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Employee = new Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	empId: {
		type: Number,
		min: 10000,
		max: 99999,
	},
	emailId: {
		type: String,
	},
	contactNo: {
		type: Number,
	},
});

module.exports = mongoose.model("Employee", Employee);
