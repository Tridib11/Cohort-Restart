const express = require("express");
const app = express();

app.use(express.json());
app.use(bod);
let ADMINS = [];
let USERS = [];
let COURSES = [];

//POST Routes

app.post("/admin/Signup", (req, res) => {
  const admin = req.body;
  const existingAdmin = ADMINS.find((a) => a.username === admin.username);
  if (existingAdmin) {
    res.status(403).json({ message: "Admin already exists" });
  } else {
    ADMINS.push(admin);
    res.status(203).json({ message: "Admin created successfully" });
  }
});
