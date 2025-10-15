// vibe_tech/pages/api/signup.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    // Simple validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Simulate saving user data (for now we’ll just print it)
    console.log("🟢 New user registered:", { name, email });

    // In future: connect to database or Payoneer system here

    return res
      .status(200)
      .json({ message: "✅ Account created successfully!", user: { name, email } });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
