const express = require("express");
const mongoose = require("mongoose");
const user=require('./model')
const app = express();

//how to connect mongodb
//mongo.connect ma 3 parameters hingy 1stone url  or url end ma / dal ke database name bh likhengy
//2nd-> 2 object hngy
//3 ma then response dalengy ya console somthng means return kra rae hoty na
//when i wrote name of collection in the end it gave empty array so write name of collection aftre mongo.connect
mongoose
  .connect(
    "mongodb+srv://aleeza:q2Tt77RFz7NHqiz@cluster0.nbtxw.mongodb.net/sample?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  //empty object take sara data ajaye

user.find({},function(err,data){
  if(err) console.warn(err)
  console.warn(data)
})

