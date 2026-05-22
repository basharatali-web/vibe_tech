
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 API is LIVE and working");
});

app.get("/test", (req, res) => {
  res.json({ status: "ok" });
});

// IMPORTANT: Render port fix
const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
