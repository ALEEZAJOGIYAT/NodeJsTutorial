const connect = require("./mongoConnection");

const Insert = async () => {
  let db = await connect();
  const result = await db.insert([
    {name: "Iphone", model: "Iphone 7",price: "50,000"},
    { name: "Iphone",model: "Iphone 12",price: "1,20000"},
  ]);
  if (result.acknowledged) {
    console.log("data is inserted");
  }
};
Insert();
