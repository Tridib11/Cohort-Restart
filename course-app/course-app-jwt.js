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

//Admin Auth
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

//User auth
const generateUserJwt = (user) => {
  const payload = { username: user.username };
  return jwt.sign(payload, userSecret, { expiresIn: "1h" });
};

const authnticateUserJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, userSecret, (err, user) => {
      if (err) {
        return res.sendStatus(401); // Change to 401 or 403
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

//Admin Routes

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

app.get("/admin/courses", authnticateAdminJwt, (req, res) => {
  res.json({ courses: COURSES });
});

//User Routes

app.post("/users/signup", (req, res) => {
  const user = { ...req.body };
  const existingUser = USERS.find((u) => u.username === user.username);
  if (existingUser) {
    res.json({ message: "User already exists" });
  } else {
    USERS.push(user);
    const token = generateUserJwt(user);
    res.json({ message: "User created successfully ", token });
  }
});

app.post("/users/login", (req, res) => {
  const { username, password } = req.headers;
  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = generateUserJwt(user);
    res.json({ message: "User login successfull", token });
  } else {
    res.status(403).json({ message: "User authentication failed" });
  }
});

app.get("/users/courses", authnticateUserJwt, (req, res) => {
  let filteredCourses = [];
  for (let i = 0; i < COURSES.length; i++) {
    if (COURSES[i].published) {
      filteredCourses.push(COURSES[i]);
    }
  }
  res.json({ courses: filteredCourses });
});

app.post("/users/courses/:courseId", authnticateUserJwt, (req, res) => {
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find((c) => c.id === courseId);
  if (course) {
    const user = USERS.find((u) => u.username === req.user.username);
    if (user) {
      if (!user.purchasedCourses) {
        user.purchasedCourses = [];
      }
      user.purchasedCourses.push(course);
      res.json({ message: "Course purchased successfully" });
    } else {
      res.status(403).json({ message: "User not found" });
    }
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

app.get("/users/purchasedCourses", authnticateUserJwt, (req, res) => {
  const user = USERS.find((u) => u.username === req.user.username);
  if (user && user.purchasedCourses) {
    res.json({ purchasedCourses: user.purchasedCourses });
  } else {
    res.status(404).json({ message: "No courses purchased" });
  }
});

app.listen(3000, () => {
  console.log("Server started");
});
