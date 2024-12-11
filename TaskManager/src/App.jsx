import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import UsersPage from "./pages/UsersPage";
import TasksPage from "./pages/TasksPage";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow text-center">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
