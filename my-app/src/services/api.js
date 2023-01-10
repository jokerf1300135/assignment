const API_ROOT = "https://fyzen-assignment.onrender.com/emps";
// const API_ROOT = "https://localhost:5001/emps";

async function getAllEmployees() {
	return fetch(`${API_ROOT}/`, {
		method: "GET",
	});
}

async function getEmployeeById(id) {
	return fetch(`${API_ROOT}/${id}`, {
		method: "GET",
	});
}

async function addEmployee(emp) {
	return fetch(`${API_ROOT}/add`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(emp),
	});
}

async function editEmployee(emp) {
	return fetch(`${API_ROOT}/update/${emp._id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(emp),
	});
}

async function deleteEmployee(id) {
	return fetch(`${API_ROOT}/delete/${id}`, {
		method: "DELETE",
	});
}

const apis = {
	getAllEmployees,
	getEmployeeById,
	addEmployee,
	deleteEmployee,
	editEmployee,
};

export default apis;
