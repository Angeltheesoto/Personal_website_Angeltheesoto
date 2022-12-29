const mongoose = require("mongoose");

// Database - This connects to mongoDB.
const connectDB = async () => {
  const url = process.env.MONGO_URI;

  try {
    const conn = await mongoose.connect(
      "mongodb+srv://angeltheesoto:Shadow_2373@cluster0.23azwy6.mongodb.net/?retryWrites=true&w=majority" ||
        "mongodb://localhost/projects",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
