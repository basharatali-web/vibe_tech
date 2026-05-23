const express = require("express");
const cors = require("cors");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("AI Try-On API is running");
});

app.post("/tryon", async (req, res) => {
  try {
    const { userImage, clothImage } = req.body;

    if (!userImage || !clothImage) {
      return res.status(400).json({
        success: false,
        error: "User image and cloth image are required"
      });
    }

    const response = await fetch(
      "https://fal.run/fal-ai/image-apps-v2/virtual-try-on",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Key ${process.env.FAL_API_KEY}`
        },
        body: JSON.stringify({
          person_image_url: userImage,
          clothing_image_url: clothImage
        })
      }
    );

    const data = await response.json();

    res.json({
      success: true,
      result: data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
