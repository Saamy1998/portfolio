const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill all fields." });
  }

  try {
    // create reusable transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // send mail with defined transport object
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_RECEIVER,
      subject: "New Contact Form Message",
      html: `
        <h3>New message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `
    });

    res.json({ message: "✅ Message sent successfully!" });
  } catch (error) {
    console.error("Mail error:", error);
    res.status(500).json({ message: "❌ Failed to send message." });
  }
});

module.exports = router;
