const connect = require("./mongoConnection");

const Update = async () => {
  const db = await connect();
  const result =await db.updateMany({ name: "Iphone" }, { $set: { type: "touch" } });

  console.warn(result);
};

Update();
