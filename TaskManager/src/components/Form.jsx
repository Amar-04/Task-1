import React, { useState } from "react";

const Form = ({ formType, fields, onSubmit }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto my-4 bg-white p-6 rounded-lg shadow-lg text-left"
    >
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label 
            htmlFor={field.name} 
            className="block text-gray-700 font-medium mb-2"
          >
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
            id={field.name}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}
      <button 
        type="submit" 
        className="p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
      >
        {formType === "user" ? "Add User" : "Add Task"}
      </button>
    </form>
  );
};

export default Form;
