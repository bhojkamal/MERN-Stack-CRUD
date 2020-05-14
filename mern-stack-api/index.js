require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5350;
if (process.env.NODE_ENV == "development") {
  console.log("Development mode is on.");
}
var postMessageRoutes = require("./controllers/postMessageController");

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.listen(port, () => console.log(`Server is up and running  at port ${port}.`));

app.use("/postMessages", postMessageRoutes);
