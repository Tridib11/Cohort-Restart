const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const userSecret = "userSUP3RS3CR3T";
const adminSecret = "adminSUP3RS3CR3T";

const generateAdminJwt = (admin) => {
  const payload = { username: admin.username };
  return jwt.sign(payload, adminSecret, { expiresIn: "1h" });
};

const authnticateAdminJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, adminSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.post("/admin/signup", (req, res) => {
  const admin = req.body;
  const existingAdmin = ADMINS.find((a) => a.username === admin.username);
  if (existingAdmin) {
    res.status(403).json({ message: "Admin already exists" });
  } else {
    ADMINS.push(admin);
    const token = generateAdminJwt(admin);
    res.status(203).json({ message: "Admin created successfully", token });
  }
});

app.post("/admin/signin", (req, res) => {
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );
  if (admin) {
    const token = generateAdminJwt(admin);
    res.status(203).json({ message: "Admin Loggedin successfully", token });
  } else {
    res.status(404).json({ message: "Admin authentication failed" });
  }
});

app.post("/admin/courses", authnticateAdminJwt, (req, res) => {
  const course = req.body;
  course.id = Date.now();
  COURSES.push(course);
  res.json({ message: `Course added Successfully ID: ${course.id}` });
});

app.put("/admin/courses/:courseId", authnticateAdminJwt, (req, res) => {
  const courseId = req.params.courseId;
  const findCourse = COURSES.find((c) => c.id === courseId);
  if (findCourse) {
    Object.assign(findCourse, req.body);
    res.status(203).json({ message: `Course modified successfull` });
  } else {
    res.status(403).json({ message: `Course not found` });
  }
});
