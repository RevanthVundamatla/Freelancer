const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Added for common frontend-backend connectivity

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes (From your screenshot)
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));

// Base route for testing
app.get("/", (req, res) => {
  res.send("Backend API is running...");
});

// MongoDB Connection 
// Using the credentials you provided
const dbURI = "mongodb+srv://revanthvundamatla_db_user:innnRVw5qYIrn4R3@cluster0.x935hai.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error:");
    console.error(err.message);
  });

// Port Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
