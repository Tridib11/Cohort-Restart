const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
aap.use(express.json());

app.use(bodyParser.json());

//Defining mongoose Schema

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

//Defining mongoose models

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);

//Secrets

const userSecret = "userSUP3RS3CR3T";
const adminSecret = "adminSUP3RS3CR3T";

const authenticateAdminJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, adminSecret, (err, admin) => {
      if (err) {
        return res.sendStatus(403);
      }
      // Check if the user has the 'admin' role
      if (admin.role !== 'admin') {
        return res.sendStatus(401);
      }
      req.admin = admin;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

const authenticateUserJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, userSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

//Connecting to MongoDB
mongoose.connect("mongodb+srv://admin:admin@cluster0.ecv5ewk.mongodb.net/course-app")

app.post('/admin/signup', async(req, res) => {
  const {username,password}=req.body
  const admin=await Admin.findOne({username})
  if(admin){
    res.status(203).json({message : 'Admin already exists'})
  }
  else{
    const newAdmin=new Admin({username,password})
    await newAdmin.save()
    const token=jwt.sign({username , role:'admin'},adminSecret,{expiresIn:'1h'})
    res.json({message:"Admin created successfully",token})
  }
})