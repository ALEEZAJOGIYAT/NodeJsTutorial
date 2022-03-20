//mongo db model
//kisi bh database se connection krty hain kisi bh language ke sth so  db table or uski collection ke a/c ek model bnaty hain or usma poora structure
//define hota ha like structure means (abhi sample collection ma ek objects bny hue hain or usma values string ha boolean ha kia ha>>)
//or ye sb model sb ma bnta ha
const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  school: String,
});

//mongoose.model ma 2 properties hoti h ek file name second jisma mongoose schema bnaya hota ha 
//isko import krayengy jhn mongoo connect kra h
module.exports = mongoose.model("model", userSchema);
