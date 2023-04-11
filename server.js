const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors());

const vegetables = {
  cauliflower: {
    family: "brassica",
    position: "full sun",
    frostTolerant: true,
    perennial: false,
    spacing: "50cm each way",
    tips: "surround stem with 10cm mat with a slit cut into it for the stem to prevent cabbage root fly, use mesh or fleece against butterflies",
    harvesting:
      "when the head has fully developed, but before curd becomes loose",
  },
  tomato: {
    family: "potato and tomato",
    position: "full sun",
    frostTolerant: false,
    perennial: false,
    spacing: "50cm each way",
    tips: "tie upright to canes with string to support the weight of the fruit, remove side shoots which grow in the angle between the leaf stems and the main stem of the plant, weekly liquid feed in mid spring and plant out in early summer",
    harvesting:
      "pick regularly as soon as the fruits are ripe as it encourages production of more tomatoes",
  },
  unknown: {
    family: "unknown",
    position: "unknown",
    frostTolerant: false,
    perennial: false,
    spacing: "unknown",
    tips: "unknown",
    harvesting: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:vegetable", (req, res) => {
  const vegName = req.params.vegetable.toLowerCase();
  if (vegetables[vegName]) {
    res.json(vegetables[vegName]);
  } else {
    res.json(vegetables["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
