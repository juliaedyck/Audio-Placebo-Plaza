"use strict";

const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, CLOUDINARY_URL, API_KEY, API_SECRET} = process.env;
const { v4: uuidv4 } = require("uuid");
const { runInNewContext } = require("vm");

const cloudinary = require("cloudinary").v2;

let fs = require('fs');
let uploads = {};


cloudinary.config({
  cloud_name: "sample",
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

///handlers

//// add user
const addUser = async (req, res) => {
    const { firstName, lastName, email, password} = req.body;
  console.log(req.body)
    const newUser = {
      _id: uuidv4(),
      ...req.body,
    };
    const client = new MongoClient(MONGO_URI, options);
    try {
      await client.connect();
      console.log("connected")
      const db = client.db("AudioPlacebo");
      //   add user
      const insertResult = await db.collection("users").insertOne(newUser);
    
      if (insertResult) {
        return res.status(200).json({ status: 200, message: newUser });
      } else {
        return res
          .status(400)
          .json({ status: 400, message: "Cannot submit form" });
      }
    } catch (err) {
      console.log(err.mesage);
    } finally {
      await client.close();
    }
  };
  

const getUserById = async (req, res) => {
const id = req.params.id
console.log(id)
const client = new MongoClient(MONGO_URI, options);

try {
  await client.connect();
  const db = client.db("AudioPlacebo")
  const profile = await db.collection("users").findOne({_id: id})
  console.log(profile)
  if (profile) {
    return res.status(200).json({ status: 200, message: "hello", data: profile });
  } else {
    return res
      .status(400)
      .json({ status: 400, message: "user not found" });
  }    } catch (err){console.log(err)}
  
}



//login

const getUserByPassword = async (req, res) => {

  const {firstName, password} = req.body
  console.log(req.body.password)
  const client = new MongoClient(MONGO_URI, options);

    try {
      await client.connect();
      console.log("connected")
      const db = client.db("AudioPlacebo");

// /validation 

const matchUser = await db.collection("users").findOne({firstName, password});

console.log(matchUser)
if (matchUser) {
  return res.status(200).json({ status: 200, message: "logged in", data: matchUser });
} else {
  return res
    .status(400)
    .json({ status: 400, message: "user not found" });
}    } catch (err){console.log(err)}

    
};


//////update profile

const likePlacebo = async (req, res) => {
  try {
    const {

      placeboId,
      _id
    } = req.body;
console.log(req.body)
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("AudioPlacebo");

    ///findOne(_id)
    ///push placeboId into favourites array
    // updateOne 
    const findUser = await db.collection("users").findOne({_id})
    console.log(findUser)

    const updateProfile = await db.collection("users").updateOne(
      { _id: _id },
      // { $set: { favourites: placeboId } }

      {$push: 
        {favourites: placeboId}}

    );
    await client.close();
    if (updateProfile) {
      return res
        .status(200)
        .json({ status: 200, message: "success", data: updateProfile });
    } 
    
  } catch (err) {
    console.log(err)
    res.status(400).json({ status: 500, mesage: "error", error:err });
  }
};

//// fillForm

const fillForm = async (req, res) => {
  try {
    const {

      favSound,
      noise,
      _id
    } = req.body;
console.log(req.body)
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("AudioPlacebo");

    ///findOne(_id)
    ///push placeboId into favourites array
    // updateOne 
    
    
    const updateProfile = await db.collection("users").updateOne(
      { _id },
      { $set: { favSound: favSound,
        noise: noise }, }
        
        );
        const findUser = await db.collection("users").findOne({_id})

    await client.close();
    if (updateProfile.modifiedCount) {
      return res
        .status(200)
        .json({ status: 200, message: "success", data: findUser });
    } else {return res
      .status(400)
      .json({ status: 200, message: "user not updated", data: findUser });}
    
  } catch (err) {
    console.log(err)
    res.status(400).json({ status: 500, mesage: "error", error:err });
  }
};

  //getPlacebo

const getPlacebo = async (req, res) => {

const _id = req.params.id
console.log(_id)
const client = new MongoClient(MONGO_URI, options);

try {
  await client.connect();
  console.log("connected")
  const db = client.db("AudioPlacebo")
  const placebo = await db.collection("sounds").findOne({_id: ObjectId(_id)})
  // console.log(placebo)
  if (placebo) {
    return res.status(200).json({ status: 200, data: placebo });
  } else {
    return res
      .status(400)
      .json({ status: 400, message: "placebo not found" });
  }    } catch (err){console.log(err)}
    
  }


  ////get placebos

  const getPlacebos = async (req,res) => {
    try {
      const client = new MongoClient(MONGO_URI, options);
      await client.connect();
      const db = client.db("AudioPlacebo");
      const myPlacebos= await db
        .collection("sounds")
        .find()
        .toArray();
      res.status(200).json({ status: 200, data: myPlacebos });
  
      client.close();
    } catch (err) {
      console.log(err);
    }

  }

  module.exports = {addUser, getPlacebo, getUserByPassword,  likePlacebo, getUserById, getPlacebos, fillForm}