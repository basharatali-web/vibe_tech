const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({limit:"20mb"}));

app.get("/", (req,res)=>{
  res.send("Real Try-On Backend Running");
});

app.post("/tryon", (req,res)=>{

  const {human_image, cloth_image, gender, style} = req.body;

  // ⚠️ temporary fake response (next step real AI)
  const result = {
    result:
    "https://image.pollinations.ai/prompt/" +
    encodeURIComponent(
      "realistic " + gender + " wearing " + style +
      ", studio fashion photography"
    )
  };

  res.json(result);

});

app.listen(3000, ()=>{
  console.log("Server running on port 3000");
});
