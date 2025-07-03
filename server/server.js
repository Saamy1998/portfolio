const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("✅ MongoDB connected"))
.catch(err=>console.error("Mongo error:", err));

app.get("/api/protected", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ message: "This is protected data!", user: decoded });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
});

const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
