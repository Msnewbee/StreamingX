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
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

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

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Nama:
          <input type="text" className="w-full border p-2 rounded-md" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" className="w-full border p-2 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label className="block mb-4">
          Pesan:
          <textarea className="w-full border p-2 rounded-md" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Kirim</button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
    </div>
  );
}
