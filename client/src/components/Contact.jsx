import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setStatus(data.message);
      if (res.ok) {
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("❌ Failed to send. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="py-10 px-4 max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-3 rounded bg-gray-800 border border-gray-600 text-white"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="p-3 rounded bg-gray-800 border border-gray-600 text-white"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          className="p-3 rounded bg-gray-800 border border-gray-600 text-white"
          placeholder="Message"
          rows="4"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className={`bg-purple-600 hover:bg-purple-700 text-white p-3 rounded transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
