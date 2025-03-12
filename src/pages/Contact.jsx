import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Mengirim...");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();
    if (response.ok) {
      setStatus("Pesan berhasil dikirim!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Terjadi kesalahan, coba lagi.");
    }
  } catch (error) {
    setStatus("Terjadi kesalahan, coba lagi.");
  }
};
