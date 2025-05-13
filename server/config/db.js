const mongoose = require("mongoose");

const connectDB = async () => {
  // const conn = await mongoose.connect(process.env.MONGO_URI);
  // const conn = await mongoose.connect("mongodb://mongo:27017/test");

  // connect using localhost if running mongodb through docker
  const conn = await mongoose.connect("mongodb://localhost:27017/mydb");

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
