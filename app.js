const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());


//Import Routes
const blogsRoute = require('./routes/blogs');

app.use('/blogs', blogsRoute);



//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
});



// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log('connected to DB!')
);


//How to listen sever
app.listen(3000);