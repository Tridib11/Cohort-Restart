const express=require('express')
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const app=express()

aap.use(express.json())

//Defining mongoose Schema

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{type: mongoose.Schema.Types.ObjectId,ref:'Course'}]
})

const adminSchema=new mongoose.Schema({
  username:String,
  password:String
})

const courseSchema=new mongoose.Schema({
  title:String,
  description:String,
  price:Number,
  imageLink:String,
  published:Boolean
})

//Defining mongoose models

const User=mongoose.model('User',userSchema)
const Admin=mongoose.model('Admin',adminSchema)
const Course=mongoose.model('Course',courseSchema)


//Secrets

const userSecret="userSUP3RS3CR3T"
const adminSecret="adminSUP3RS3CR3T"

const authenticateAdminJwt=(req,res,next)=>{
  const authHeader=req.headers.authorization
  if(authHeader){
    const token=authHeader.split(' ')[1]
    
  }
}