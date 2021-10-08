const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("../config/db.config.js");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Test-api" });
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = dbConfig.port || 7777;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
