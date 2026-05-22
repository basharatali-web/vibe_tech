app.post("/tryon", async (req, res) => {
  try {
    const response = await fetch("https://fal.run/fal-ai/image-apps-v2/virtual-try-on", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Key ${process.env.FAL_API_KEY}`
      },
      body: JSON.stringify({
        person_image_url: req.body.userImage,
        clothing_image_url: req.body.clothImage
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
