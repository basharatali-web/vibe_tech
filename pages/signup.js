// vibe_tech/pages/signup.js
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Creating your account...");

    // Placeholder for backend integration (to connect later)
    setTimeout(() => {
      setMessage("✅ Account created successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Create Your Vibe Tech Account 🚀</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <label className="block mb-4">
          <span className="text-lg font-semibold">Full Name</span>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            className="mt-1 block w-full p-2 border rounded-lg"
            placeholder="John Doe"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-lg font-semibold">Email</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            className="mt-1 block w-full p-2 border rounded-lg"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-lg font-semibold">Password</span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            className="mt-1 block w-full p-2 border rounded-lg"
            placeholder="********"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90"
        >
          Sign Up
        </button>
      </form>

      {message && <p className="mt-4 text-lg">{message}</p>}

      <p className="mt-6 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-yellow-300 underline">
          Login here
        </Link>
      </p>
    </div>
  );
}
