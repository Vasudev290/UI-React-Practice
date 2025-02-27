import React, { useState } from "react";

const Forms = () => {
  const [inputField, setInputField] = useState({
    name: "",
    age: "",
    sal: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
  });

  const updateHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-6 rounded-lg shadow-lg w-[40rem]"
      >
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Application Form
        </h3>

        {/* Two-column layout */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left side - 4 fields */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={inputField.name}
              onChange={updateHandler}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={inputField.age}
              onChange={updateHandler}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={inputField.email}
              onChange={updateHandler}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              name="phone"
              placeholder="Phone"
              value={inputField.phone}
              onChange={updateHandler}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right side - 4 fields */}
          <div className="space-y-4">
            <input
              type="number"
              name="sal"
              placeholder="Salary"
              value={inputField.sal}
              onChange={updateHandler}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={inputField.city}
              onChange={updateHandler}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={inputField.state}
              onChange={updateHandler}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={inputField.country}
              onChange={updateHandler}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
