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
		type: String,
	},
	emailId: {
		type: String,
	},
	contactNo: {
		type: Number,
		min: 1000000000,
		max: 9999999999,
	},
});

module.exports = mongoose.model("Employee", Employee);
