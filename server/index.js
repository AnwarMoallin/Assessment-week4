const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  postNum,
  deleteNum,
} = require("./controller");
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/number", postNum);
app.delete("/api/number/", deleteNum);

app.listen(3000, () => console.log("Server running on 3000"));
