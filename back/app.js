const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const MONGODB_URI = process.env.MONGO_DB_URI;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

mongoose.Promise = global.Promise;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Success db connect");
  })
  .catch((err) => {
    console.error("DB Connet fail", err);
    process.exit();
  });

// app.get("/", (req, res) => {
//   res.json({ message: "Server is running :D" });
// });

app.use("/palettes", require("./routes/palette"));

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
