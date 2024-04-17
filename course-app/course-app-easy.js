const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


let ADMINS = [];
let USERS = [];
let COURSES = [];

//Authentication middlewares

//Admin Middleware
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
  const findCourse = COURSES.find((c) => c.id === courseId);
  if (findCourse) {
    Object.assign(findCourse, req.body);
    res.status(203).json({ message: `Course modified successfull` });
  } else {
    res.status(403).json({ message: `Course not found` });
  }
});

app.get("/admin/courses", adminAuthentication, (req, res) => {
  res.json({ course: COURSES });
});


