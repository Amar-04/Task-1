const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mulwaniamar04:admin@cluster0.dcfys.mongodb.net/manager?retryWrites=true&w=majority&appName=Cluster0"
  )

  .then(() => {
    console.log("MongoDB connected successfully.");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const userModel = mongoose.model("user", userSchema);

const taskSchema = new mongoose.Schema({
  title: String,
  assignedUser: String,
});

const taskModel = mongoose.model("task", taskSchema);

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  userModel
    .create({ name, email })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/users", (req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json({ error: err.message }));
});

app.get("/tasks", (req, res) => {
  taskModel
    .find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.json({ error: err.message }));
});

app.post("/task", (req, res) => {
  const { title, assignedUser } = req.body;
  taskModel
    .create({ title, assignedUser })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/tasks", (req, res) => {
    taskModel
      .find()
      .then((tasks) => res.json(tasks))
      .catch((err) => res.json({ error: err.message }));
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
