import React, { useState } from "react";
import CustomerView from "./CustomerView";

const CustomerAdd = () => {
  const [data, setData] = useState("");
  const [customer, setCustomer] = useState([]);

  const addCustomer = () => {
    if (data) {
      setCustomer((prevSt) => [...prevSt, data]);
      console.log(customer);
      setData("");
    }
  };
  return (
    <center>
      <div>
        <h2>Add New Customer</h2>
        <input
          type="text"
          value={data}
          placeholder="Type Something.!"
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={addCustomer}>Add</button>
      </div>
      <CustomerView customers={customer} />
    </center>
  );
};

export default CustomerAdd;
