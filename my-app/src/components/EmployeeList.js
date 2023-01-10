import React, { useState, useEffect } from "react";
import "./../styles/EmployeeList.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import AddEmpModal from "./AddEmpModal";
import ShowEmpModal from "./ShowEmpModal";

import apis from "./../services/api";

function EmployeeList() {
	const [employees, setEmployees] = useState([]);

	const [showAddEmp, setShowAddEmp] = useState(false);
	const [showEditEmp, setShowEditEmp] = useState(false);
	const [showEmp, setShowEmp] = useState(false);
	const [showIndex, setShowIndex] = useState(0);

	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		empId: "",
		emailId: "",
		contactNo: "",
	});

	const handleValueChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
			empId: Number(employees[employees.length - 1].empId) + 1,
		});
	};

	useEffect(() => {
		updateEmployeesList();
	}, []);

	async function updateEmployeesList() {
		try {
			let response = await apis.getAllEmployees().then((res) => res.json());

			if (!response.error) {
				setEmployees(response);
			} else {
				console.log("Error in updateEnrollmentList in Enrollments.js");
				alert("Server error, please try again after some time");
			}
		} catch (err) {
			console.log(err + "in updateEmployees");
		}
	}

	async function handleAddEmpSubmit() {
		console.log(JSON.stringify(values, 4, 4));

		try {
			let response = await apis.addEmployee(values).then((res) => res.json());

			if (!response.error) {
				updateEmployeesList();
			} else {
				console.log("Error in updateEnrollmentList in Enrollments.js");
				alert("Server error, please try again after some time");
			}
		} catch (err) {
			console.log(err + "in handleAddEmpSubmit");
		}

		setShowAddEmp(false);
	}

	async function handleEditEmpSubmit() {
		console.log(JSON.stringify(values, 4, 4));

		try {
			let response = await apis.editEmployee(values).then((res) => res.json());

			if (!response.error) {
				updateEmployeesList();
			} else {
				console.log("Error in updateEnrollmentList in Enrollments.js");
				alert("Server error, please try again after some time");
			}
		} catch (err) {
			console.log(err + "in handleAddEmpSubmit");
		}

		setShowEditEmp(false);
	}

	async function deleteEmployee(id) {
		try {
			let response = await apis.deleteEmployee(id).then((res) => res.json());

			if (!response.error) {
				updateEmployeesList();
				alert(response.success);
			} else {
				console.log("Error in updateEnrollmentList in Enrollments.js" + response.error);
				alert("Server error, please try again after some time");
			}
		} catch (err) {
			console.log(err + "in updateEmployees");
		}
	}

	return (
		<div className="EmployeeList">
			<h1>Employees List</h1>

			<Button
				variant="primary"
				className="mb-4"
				onClick={() => {
					setValues({
						firstName: "",
						lastName: "",
						empId: "",
						emailId: "",
						contactNo: "",
					});

					setShowAddEmp(true);
				}}>
				Add Employee
			</Button>

			<AddEmpModal
				headerString="Add an Employee"
				submitString="Add"
				showAddEmp={showAddEmp}
				handleAddEmpClose={() => setShowAddEmp(false)}
				values={values}
				handleValueChange={handleValueChange}
				handleAddEmpSubmit={handleAddEmpSubmit}
			/>

			<AddEmpModal
				headerString="Edit Employee"
				submitString="Edit"
				showAddEmp={showEditEmp}
				handleAddEmpClose={() => setShowEditEmp(false)}
				values={values}
				handleValueChange={handleValueChange}
				handleAddEmpSubmit={handleEditEmpSubmit}
			/>

			<ShowEmpModal show={showEmp} values={employees[showIndex]} onHide={() => setShowEmp(false)} />

			{/* Employee Table */}
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Employee First Name</th>
						<th>Employee Last Name</th>
						<th>Employee Email Id</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{employees.length > 0 &&
						employees.map((emp) => (
							<tr key={emp.empId}>
								<td>{emp.firstName}</td>
								<td>{emp.lastName}</td>
								<td>{emp.emailId}</td>
								<td>
									<Button
										variant="info"
										className="m-1 mt-0 mb-0"
										onClick={() => {
											setValues({
												...employees[employees.indexOf(emp)],
											});

											setShowEditEmp(true);
										}}>
										Update
									</Button>
									<Button
										variant="danger"
										className="m-1 mt-0 mb-0"
										onClick={() => deleteEmployee(emp._id)}>
										Delete
									</Button>
									<Button
										variant="info"
										className="m-1 mt-0 mb-0"
										onClick={() => {
											setShowIndex(employees.indexOf(emp));
											setShowEmp(true);
										}}>
										View
									</Button>
								</td>
							</tr>
						))}
				</tbody>
			</Table>
		</div>
	);
}

export default EmployeeList;
