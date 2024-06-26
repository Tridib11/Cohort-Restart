const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const bodyParser = require("body-parser");


app.use(cors())
app.use(express.json());

app.use(bodyParser.json());

//Defining mongoose Schema

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref: "Course"}],
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
            if (admin.role !== "admin") {
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
            if (user.role !== "user") {
                return res.sendStatus(401);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

//Connecting to MongoDB
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.ecv5ewk.mongodb.net/course-app-new"
);

app.get("/admin/me",authenticateAdminJwt,(req,res)=>{
    res.json({
        username:req.admin.username
    })
})
app.post("/admin/signup", async (req, res) => {
    const {username, password} = req.body;
    const admin = await Admin.findOne({username});
    if (admin) {
        res.status(203).json({message: "Admin already exists"});
    } else {
        const newAdmin = new Admin({username, password});
        await newAdmin.save();
        const token = jwt.sign({username, role: "admin"}, adminSecret, {
            expiresIn: "1h",
        });
        res.json({message: "Admin created successfully", token});
    }
});

app.post("/admin/login", async (req, res) => {
    const {username, password} = req.headers;
    const admin = await Admin.findOne({username, password});
    if (admin) {
        const token = jwt.sign({username, role: "admin"}, adminSecret, {
            expiresIn: "1h",
        });
        res.json({message: "Logged in successfully", token});
    } else {
        res.status(403).json({message: "Invalid username or password"});
    }
});

app.post("/admin/courses", authenticateAdminJwt, async (req, res) => {
    const course = new Course(req.body);
    await course.save();
    res.json({message: "Course created Successfully", courseId: course.id});
});

app.put("/admin/courses/:courseId", authenticateAdminJwt, async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, {
        new: true,
    });
    if (course) {
        res.json({message: "Course updated successfully"});
    } else {
        res.status(404).json({message: "Course not found"});
    }
});

app.get("/admin/courses", authenticateAdminJwt, async (req, res) => {
    const courses = await Course.find({});
    res.json({courses});
});


// User routes
app.post('/users/signup', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if (user) {
        res.status(403).json({message: 'User already exists'});
    } else {
        const newUser = new User({username, password});
        await newUser.save();
        const token = jwt.sign({username, role: 'user'}, userSecret, {expiresIn: '1h'});
        res.json({message: 'User created successfully', token});
    }
});

app.post('/users/login', async (req, res) => {
    const {username, password} = req.headers;
    const user = await User.findOne({username, password});
    if (user) {
        const token = jwt.sign({username, role: 'user'}, userSecret, {expiresIn: '1h'});
        res.json({message: 'Logged in successfully', token});
    } else {
        res.status(403).json({message: 'Invalid username or password'});
    }
});

app.get('/users/courses', authenticateUserJwt, async (req, res) => {
    const courses = await Course.find({published: true});
    res.json({courses});
});

app.post('/users/courses/:courseId', authenticateUserJwt, async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    console.log(course);
    if (course) {
        const user = await User.findOne({username: req.user.username});
        if (user) {
            user.purchasedCourses.push(course);
            await user.save();
            res.json({message: 'Course purchased successfully'});
        } else {
            res.status(403).json({message: 'User not found'});
        }
    } else {
        res.status(404).json({message: 'Course not found'});
    }
});

app.get('/users/purchasedCourses', authenticateUserJwt, async (req, res) => {
    const user = await User.findOne({username: req.user.username}).populate('purchasedCourses');
    if (user) {
        res.json({purchasedCourses: user.purchasedCourses || []});
    } else {
        res.status(403).json({message: 'User not found'});
    }
});
app.listen(3000, () => {
    console.log("Server running on port 3000")
})