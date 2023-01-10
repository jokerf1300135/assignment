import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ShowEmpModal(props) {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">Employee Details</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					Employee Id: <b>{props.values ? props.values.empId : ""}</b> <br />
					First Name: <b>{props.values ? props.values.firstName : ""}</b> <br />
					Last Name: <b>{props.values ? props.values.lastName : ""}</b> <br />
					Email Id: <b>{props.values ? props.values.emailId : ""}</b> <br />
					Contact Number: <b>{props.values ? props.values.contactNo : ""}</b> <br />
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ShowEmpModal;
