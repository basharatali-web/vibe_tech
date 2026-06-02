const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json({
  limit: "50mb"
}));

app.get("/", (req, res) => {

  res.send("Overlay Try-On API Running");
});

app.post("/tryon", async (req, res) => {

  try {

    const {
      userImage,
      clothImage
    } = req.body;

    if (!userImage || !clothImage) {

      return res.json({
        success: false,
        error: "Both images required"
      });
    }

    // Send cloth image back
    res.json({
      success: true,

      result: {
        mergedImage: clothImage
      }
    });

  } catch (error) {

    res.json({
      success: false,
      error: error.message
    });
  }
});

const PORT =
  process.env.PORT || 10000;

app.listen(PORT, () => {

  console.log(
    "Server running on port " + PORT
  );
});
