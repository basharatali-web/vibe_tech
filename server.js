const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Free Try-On API Running");
});

app.post("/tryon", async (req, res) => {
  try {
    const { userImage, clothImage } = req.body;

    res.json({
      success: true,
      result: {
        message: "Free backend connected successfully",
        person: userImage,
        cloth: clothImage
      }
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
