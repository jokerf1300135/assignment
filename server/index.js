const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
let morgan = require("morgan");
const mongoose = require("mongoose");
let Emp = require("./emp.model");
const PORT = 5001;

app.use(cors());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));
app.use(bodyParser.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://neel-thakker:fyzen%40123@cluster0.sym48kz.mongodb.net/?retryWrites=true&w=majority", {
	useNewUrlParser: true,
});
const connection = mongoose.connection;

connection.once("open", function () {
	console.log("MongoDB database connection established successfully");
});

const empRoutes = express.Router();
empRoutes.route("/").get(function (req, res) {
	Emp.find(function (err, emps) {
		if (err) {
			console.log(err);
			res.json({ error: err });
		} else {
			res.json(emps);
		}
	});
});

empRoutes.route("/:id").get(function (req, res) {
	let id = req.params.id;
	Emp.findById(id, function (err, emp) {
		res.json(emp);
	});
});

empRoutes.route("/add").post(function (req, res) {
	console.log(req.body);
	let emp = new Emp(req.body);
	console.log(emp);
	emp.save()
		.then((emp) => {
			res.status(200).json({ emp: "emp added successfully" });
		})
		.catch((err) => {
			res.status(400).json({ error: err });
		});
});

empRoutes.route("/update/:id").put(function (req, res) {
	Emp.findById(req.params.id, function (err, emp) {
		if (!emp) res.status(404).send("data is not found");

		emp.firstName = req.body.firstName;
		emp.lastName = req.body.lastName;
		emp.emailId = req.body.emailId;
		emp.empId = req.body.empId;
		emp.contactNo = req.body.contactNo;

		emp.save()
			.then((emp) => {
				res.json({ success: "Employee updated" });
			})
			.catch((err) => {
				res.status(400).json({ error: err });
			});
	});
});

empRoutes.route("/delete/:id/").delete(function (req, res) {
	Emp.findOne({ _id: req.params.id }).exec((err, emp) => {
		if (err) {
			res.status(500).send({ error: err });
		}

		emp.remove(() => {
			res.status(200).json({ success: "Employee deleted" });
		});
	});
});

app.use("/emps", empRoutes);

app.listen(PORT, function () {
	console.log("Server is running on Port: " + PORT);
});
