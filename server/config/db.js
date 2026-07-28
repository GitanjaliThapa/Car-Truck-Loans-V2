// const mongoose = require('mongoose');

// async function connectDB() {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB connection failed:', err.message);
//     process.exit(1);
//   }
// }

// module.exports = connectDB;
const mongoose = require("mongoose");

async function connectDB() {
  try {
    console.log("Connecting to:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
    console.log("Database:", mongoose.connection.name);
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
}

module.exports = connectDB;