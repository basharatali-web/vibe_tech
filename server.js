const express = require("express");
const cors = require("cors");
const { fal } = require("@fal-ai/client");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

fal.config({
  credentials: process.env.FAL_API_KEY
});

app.get("/", (req, res) => {
  res.send("AI Try-On API is running");
});

app.post("/tryon", async (req, res) => {
  try {
    const { userImage, clothImage } = req.body;

    const result = await fal.subscribe(
      "fal-ai/image-apps-v2/virtual-try-on",
      {
        input: {
          person_image_url: userImage,
          clothing_image_url: clothImage
        }
      }
    );

    res.json({
      success: true,
      result: result.data
    });

  } catch (error) {
    res.json({
      success: false,
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
