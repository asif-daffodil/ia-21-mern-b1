const express = require('express');
const app = express();
const port = 5000;

// cors
const cors = require('cors');
app.use(cors());

// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mern21');

// schema
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    name: String,
    area: String,
    gender: String
});

// model
const Student = mongoose.model('Student', studentSchema);

// server start
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("About Us");
});

// json data
app.get("/json", (req, res) => {
    res.json({ name: "John Doe", age: 25 });
});

// params
app.get("/user/:id", (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// not mandatory params
/* app.get("/student/:name?", (req, res) => {
    res.send(`Student Name: ${req.params.name ?? "No Name"}`);
}); */

// query params
app.get("/employee", (req, res) => {
    res.send(`Employee ID: ${req.query.id}`);
});

// Middleware
const checkAge = (req, res, next) => {
    if(!req.query.age){
        res.send("Please provide age");
    }else if (req.query.age < 18) {
        res.send("You are not allowed");
    } else {
        next();
    }
}

app.get("/drink", checkAge, (req, res) => {
    res.send(`Your age is ${req.query.age}. You are allowed to drink`);
});

// get all student
app.get("/students", (req, res) => {
    Student.find().then((data) => {
        res.json(data);
    });
});

// get student by id
app.get("/student/:id", async (req, res) => {
    const data = await Student.findById(req.params.id);
    res.json(data);
});

// post student
app.post("/student", (req, res) => {
    Student.create(req.body).then((data) => {
        res.json(data);
    });
});

// update student
app.put("/student/:id", (req, res) => {
    Student.updateOne({ _id: req.params.id }, req.body).then((data) => {
        res.json(data);
    });
});

// delete student
app.delete("/student/:id", (req, res) => {
    Student.deleteOne({ _id: req.params.id }).then((data) => {
        res.json(data);
    });
});