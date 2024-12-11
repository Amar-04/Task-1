import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/tasks")
      .then((response) => setTasks(response.data))
      .catch((err) => console.error("Error fetching tasks:", err)); 
  }, []);

  const taskFields = [
    { name: "title", label: "Title", type: "text", required: true },
    {
      name: "assignedUser",
      label: "Assigned User",
      type: "text",
      required: true,
    },
  ];

  const handleTaskSubmit = (formData) => {
    console.log("Form Data:", formData);
    axios
      .post("http://localhost:3000/task", formData)
      .then((response) => {
        console.log("Task created:", response.data);
      })
      .catch((error) => {
        console.log("Error creating Task:", error);
      });
  };

  return (
    <div className="">
      <Form
        fields={taskFields}
        formType="task"
        onSubmit={handleTaskSubmit}
      ></Form>
      <h2 className="my-4 text-xl font-medium">Tasks</h2>
      <table className="table border border-gray-300 mx-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-gray-200">Title</th>
            <th className="border px-4 py-2 bg-gray-200">Assigned User</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{user.title}</td>
              <td className="border px-4 py-2">{user.assignedUser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksPage;
