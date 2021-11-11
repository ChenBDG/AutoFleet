//require of env variables
require('dotenv').config();

//require packages for use in web
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

//require model
const Auto = require('./models/auto');

//set connection to db
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();
//set ejs for templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));

//route for home page
app.get('/', (req, res)=>{
    res.render('homePage')
})

//route for show all available cars in db
app.get('/allAvailable', async(req, res)=>{
    Auto.find({
     "state":"online"
    }, function(err, docs){
        var location = [];
        for(var i = 0; i< docs.length; i++){
            location.push(docs[i].location)
        }
        res.render('showAll', {location});
    });
})

//route for show all available cars at selected area
app.get('/availableInArea', (req, res)=>{
    Auto.find({
        "state":"online"
       }, function(err, docs){
           var location = [];
           for(var i = 0; i< docs.length; i++){
               location.push(docs[i].location)
           }
           res.render('showSelectedArea', {location});
       });
})

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log('Serving on port 3000')
})


