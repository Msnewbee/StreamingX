const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bilariko2@gmail.com",  // Ganti dengan email Anda
    pass: "PASSWORD_GMAIL_ANDA", // Ganti dengan password atau app password
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: "bilariko2@gmail.com", // Email Anda
    subject: `Pesan dari ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email berhasil dikirim" });
  } catch (error) {
    res.status(500).json({ message: "Gagal mengirim email", error });
  }
});

app.listen(5000, () => console.log("Server berjalan di port 5000"));
