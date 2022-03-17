import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = process.env.MONGO_DB_URI;

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

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running :D" });
});

app.get('palettes', (req, res)=> {
  mongoose.Collection('palette')


})

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
