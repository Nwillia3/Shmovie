const mongoose = require("mongoose");
const config = require("config");
const db = config.get("uri");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("Db connected");
  } catch (err) {
    console.error({ error: err.message });
    process.exit(1);
  }
};

module.exports = connectDB;
