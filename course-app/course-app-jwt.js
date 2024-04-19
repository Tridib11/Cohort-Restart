const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const userSecret="userSUP3RS3CR3T"
const adminSecret="adminSUP3RS3CR3T"

const generateAdminJwt=(admin)=>{
  const payload={username:admin.username}
  return jwt.sign(payload,adminSecret,{expiresIn:'1h'})
}

app.post('/admin/signup',(req,res)=>{
  const admin=req.body
  const existingAdmin=ADMINS.find(a=>a.username === admin.username)
  if(existingAdmin){
    res.status(403).json({message:"Admin already exists"})
  }else{
    ADMINS.push(admin)
    const token=generateAdminJwt(admin)
    res.status(203).json({message:"Admin created successfully",token})
  }
})

app.post('/admin/signin',(req,res)=>{
  const admin=
})
