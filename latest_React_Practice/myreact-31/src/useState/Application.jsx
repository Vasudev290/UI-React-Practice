import React, { useState } from "react";

const Application = () => {
  const [inputField, setInputField] = useState({
    name: "",
    age: "",
    email: "",
  });

  const submitHandler = (event) => {
    event.preventDefault(); // ✅ Fixed preventDefault case
    alert("Form submitted successfully!");
    console.log(inputField);
  };

  const dataHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value }); // ✅ Correct state update
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Application</h1>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={inputField.name}
              onChange={dataHandler}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold">Age:</label>
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={inputField.age}
              onChange={dataHandler}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={inputField.email}
              onChange={dataHandler}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Application;
