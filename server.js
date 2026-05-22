const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Test route
app.get("/", (req, res) => {
  res.send("AI Try-On API is running");
});

// REAL TRY-ON ENDPOINT (fal.ai integration)
app.post("/tryon", async (req, res) => {
  try {
    const { userImage, clothImage } = req.body;

    if (!userImage || !clothImage) {
      return res.status(400).json({ error: "Missing images" });
    }

    const response = await fetch("https://fal.run/fal-ai/tryon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Key ${process.env.FAL_API_KEY}`
      },
      body: JSON.stringify({
        person_image: userImage,
        garment_image: clothImage
      })
    });

    const data = await response.json();

    res.json({
      success: true,
      result: data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
