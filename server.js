const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();

// const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(
 process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
// mongoose.connect(
//   'mongodb+srv://haolam:hana123@cluster0.1pczb.mongodb.net/workout?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

const PORT = process.env.PORT 

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});