// config/db.js
const mongoose = require("mongoose");

const db = process.env.MONGO_URI;
// const db = process.env.MONGO_URI;
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    // await mongoose.connect(db, {
    await mongoose.connect(
      `mongodb+srv://merntodoapp:merntodoapp@wilfredcluster.rsfdy.mongodb.net/merntodoapp23?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
};

module.exports = connectDB;
