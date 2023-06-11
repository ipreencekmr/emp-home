import React from "react";
import ReactDOM from "react-dom";
import Employee from "emp_employee/Employee";
import Address from "emp_address/Address";

import "./index.css";

const App = () => (
  <div className="container">
    Home
    <Employee></Employee>
    <Address></Address>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

export default App;
