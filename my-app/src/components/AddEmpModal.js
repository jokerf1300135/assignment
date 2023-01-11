import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddEmpModal({
	headerString,
	submitString,
	showAddEmp,
	handleAddEmpClose,
	values,
	handleValueChange,
	handleAddEmpSubmit,
}) {
	return (
		<Modal show={showAddEmp} onHide={handleAddEmpClose} backdrop="static">
			<Modal.Header closeButton>
				<Modal.Title>{headerString}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group className="mb-3" controlId="addEmpForm.ControlInput1">
						<Form.Label>First Name</Form.Label>
						<Form.Control
							type="text"
							name="firstName"
							value={values.firstName}
							onChange={(event) =>
								handleValueChange(event, String(submitString).localeCompare("Edit") === 0)
							}
							placeholder="John"
							autoFocus
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="addEmpForm.ControlInput2">
						<Form.Label>Last Name</Form.Label>
						<Form.Control
							type="text"
							name="lastName"
							value={values.lastName}
							onChange={(event) =>
								handleValueChange(event, String(submitString).localeCompare("Edit") === 0)
							}
							placeholder="Doe"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="addEmpForm.ControlInput3">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							name="emailId"
							value={values.emailId}
							onChange={(event) =>
								handleValueChange(event, String(submitString).localeCompare("Edit") === 0)
							}
							placeholder="name@example.com"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="addEmpForm.ControlInput4">
						<Form.Label>Contact No.</Form.Label>
						<Form.Control
							type="number"
							name="contactNo"
							value={values.contactNo}
							onChange={(event) =>
								handleValueChange(event, String(submitString).localeCompare("Edit") === 0)
							}
							placeholder="9999999999"
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleAddEmpClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleAddEmpSubmit}>
					{submitString}
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default AddEmpModal;
