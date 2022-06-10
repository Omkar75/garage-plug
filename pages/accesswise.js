import React, { useState } from "react";

const accesswise = () => {
  const [values, setValues] = useState({
    fullName: " ",
    email: " ",
    description: " ",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleAddFormSubmit = () => {};

  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <label className="text-lg">Accesswise Service</label>
      <form onSubmit={handleAddFormSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="fullName"
              required="required"
              placeholder="Enter a name..."
              values={values.description}
              onChange={handleAddFormChange}
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              name="email"
              required="required"
              placeholder="Enter an email..."
              value={values.email}
              onChange={handleAddFormChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              name="description"
              required="required"
              placeholder="Enter the role..."
              values={values.description}
              onChange={handleAddFormChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default accesswise;
