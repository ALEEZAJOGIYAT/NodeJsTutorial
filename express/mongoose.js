//mongoose is a npm package and worls almost same like mongodb but mongodb limited hota ha
//mongoose advanced cheezen deta ha
//validatiios can apply schemas apply krskty hain or extra field ko rok bh skty

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sample");

///schemaa of db

const usersSchema = new mongoose.Schema({
  name: String,
  model: String,
});

const connect = async () => {
  const Product = mongoose.model("users", usersSchema);

  //if to add new items in db then
  let data = new Product({ name: "Samsung J5" });
  let result = await data.save();
  console.log(result);

  //to show all data in database
  // model.find({}, function (err, data) {
  //   if (err) console.warn(err);
  //   console.warn(data);
  // });
};

//to update db

const update = async () => {
  const model = mongoose.model("users", usersSchema);
  let data = await model.updateOne(
    { name: "q-mobile" },
    { $set: { name: "QMobile" } }
  );
  console.log(data);
};

const deleteData = async () => {
  const model = mongoose.model("users", usersSchema);
  let data = await model.deleteOne({ name: "Iphone" });
  console.log(data);
};

// connect()
deleteData();
// const mongoose = require("mongoose");
// const user=require('./model')

//how to connect mongodb
//mongo.connect ma 3 parameters hingy 1stone url  or url end ma / dal ke database name bh likhengy
//2nd-> 2 object hngy
//3 ma then response dalengy ya console somthng means return kra rae hoty na
//when i wrote name of collection in the end it gave empty array so write name of collection aftre mongo.connect
// mongoose
//   .connect(
//     "mongodb+srv://aleeza:q2Tt77RFz7NHqiz@cluster0.nbtxw.mongodb.net/sample?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   //empty object take sara data ajaye

// user.find({},function(err,data){
//   if(err) console.warn(err)
//   console.warn(data)
// })
