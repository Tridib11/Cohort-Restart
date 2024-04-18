const express = require("express");
const bodyParser = require("body-parser");
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

//User Middleware
const userAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(403).json({ message: "User authtication failed" });
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

//User Routes

app.post("/users/signup", (req, res) => {
  const user = { ...req.body, purchasedCourses: [] };
  /*const user={
    username:req.body.username,
    password:req.body.password,
    purchasedCourses:[]
  }*/
  USERS.push(user);
  res.json({ message: "User created successfully" });
});

app.post("/users/login", userAuthentication, (req, res) => {
  res.json({ message: "User created Successfully" });
});

app.get("/users/courses", userAuthentication, (req, res) => {
  res.json({ Courses: COURSES.filter((c) => c.published) });
});

app.post("/users/courses/:courseId", userAuthentication, (req, res) => {
  const courseId = Number(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseId && c.published);
  if (course) {
    req.user.purchasedCourses.push(courseId);
    res.json({ message: "Course purchased successfully" });
  } else {
    res.status(404).json({ message: "Course not found or not available" });
  }
});

app.get("/users/purchasedCourses", userAuthentication, (req, res) => {
  var purchasedCourseIds = req.user.purchasedCourses;
  var purchasedCourses = [];
  for (let i = 0; i < COURSES.length; i++) {
    if (purchasedCourseIds.indexOf(COURSES[i].id) !== -1) {
      purchasedCourses.push(COURSES[i]);
    }
  }
  res.json({ purchasedCourses });
});

app.listen(3000, () => {
  console.log("Server started");
});