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


app.post('/admin/signup',(req,res)=>{
  const admin=req.body
  
})