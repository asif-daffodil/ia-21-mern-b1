const express = require('express');
const app = express();
const port = 5000;
// cors
const cors = require('cors');
app.use(cors());

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/about', (req, res) => {
    // send 404 not found
    res.status(404).send('About Us');
})

//  show json data
app.get('/json', (req, res) => {
    res.json({
        name: 'John Doe',
        age: 25
    });
})

// params
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
})

// not mandatory params
app.get('/batch/:name?', (req, res) => {
    res.send(`Batch Name: ${req.params.name ?? 'No Batch'}`);
})

// query params
app.get('/search', (req, res) => {
    res.send(`Search Query: ${req.query.q}`);
})

// middleware
const checkAge = (req, res, next) => {
    if(!req.query.age){
        res.send('Please provide age');
    }
    else if (req.query.age >= 18) {
        next();
    } else {
        res.send('You are not allowed');
    }
}

app.get('/drink', checkAge, (req, res) => {
    res.send('You can drink');
})