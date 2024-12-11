import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.error("Error fetching tasks:", err)); 
  }, []);

  const userFields = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
  ];

  const handleUserSubmit = (formData) => {
    console.log("Form Data:", formData);
    axios
      .post("http://localhost:3000/user", formData)
      .then((response) => {
        console.log("User created:", response.data);
      })
      .catch((error) => {
        console.log("Error creating user:", error);
      });
  };

  return (
    <div>
      <Form formType="user" fields={userFields} onSubmit={handleUserSubmit} />
      <h2 className="text-xl font-medium my-4">Users</h2>
      <table className="table border border-gray-300 mx-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-gray-200">Name</th>
            <th className="border px-4 py-2 bg-gray-200">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
