'use strict';

///setting up the server
const express = require('express');
const morgan = require('morgan');

const cloudinary = require('cloudinary').v2;


//importing handler functions
const {
addUser, 
getPlacebo, 
getUserByPassword,
likePlacebo,
getUserById,
getPlacebos,
fillForm,
addNote
  } = require("./handlers");

express()
  .use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

//////// endpoints
.get("/get-profile/:id", getUserById)
.get("/get-placebo/:id", getPlacebo)
.get("/get-placebos", getPlacebos)
.post("/new-user", addUser)
.post("/login", getUserByPassword)
.patch("/add-like", likePlacebo)
.patch("/add-note/:id", addNote)
.patch("/fill-form",fillForm)


.get('/', (req, res) => {
    res.send('Hello World');
 })


.listen(8000, ()=>(console.log("listening on port 8000")))