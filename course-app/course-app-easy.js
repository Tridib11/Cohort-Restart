const express = require("express");
const app = express();

app.use(express.json());
app.use(bod);
let ADMINS = [];
let USERS = [];
let COURSES = [];

//Authentication middlewares

const adminAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) {
    next();
  } else {
    res.status(403).json({ message: "Admin authentication failed" });
  }
};

//Admin Routes

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

app.post("/admin/login", adminAuthentication, (req, res) => {
  res.status(203).json({ message: "Login Successfull" });
});

app.post("/admin/courses", adminAuthentication, (req, res) => {
  const course = req.body;
  course.id = Date.now();
  COURSES.push(course);
  res.json({ message: `Course added Successfully ID: ${course.id}` });
});

app.put("/admin/courses/:courseId", adminAuthentication, (req, res) => {
  const courseId = req.params.courseId;
  
});
