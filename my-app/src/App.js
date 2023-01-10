import React from "react";
import "./styles/App.css";
import EmployeeList from "./components/EmployeeList";

function App() {
	return (
		<div className="App">
			<header className="App-header">Employee Management App</header>
			<EmployeeList />
		</div>
	);
}

export default App;
