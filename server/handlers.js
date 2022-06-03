"use strict";

const { MongoClient, MongoSystemError, Double } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "sample",
  api_key: "874837483274837",
  api_secret: "a676b67565c6767a6767d6767f676fe1",
  secure: true,
});

require("dotenv").config();
const { CLOUDINARY_URL } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

///handlers

//// add user
const addUser = async (req, res) => {
    const { firstName, lastName, email } = req.body;
  
    const newUser = {
      _id: uuidv4(),
      ...req.body,
    };
    const client = new MongoClient(MONGO_URI, options);
    try {
      await client.connect();
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
  

  module.exports = {addUser}