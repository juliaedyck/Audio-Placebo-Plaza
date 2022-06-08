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
updateProfile,
getUserById,
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
.get("/profile/:id", getUserById)
.post("/new-user", addUser)
.post("/login", getUserByPassword)
.get("/api.Cloudinary.com/v1_1/df6wmqnl6/image/upload", getPlacebo)
.patch("/profile/:id", updateProfile)


.get('/', (req, res) => {
    res.send('Hello World');
 })


.listen(8000, ()=>(console.log("listening on port 8000")))