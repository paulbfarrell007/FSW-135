const express = require("express");
const app = express();
const port = 8000;

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/moviesdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Connected to the DB")
)

app.get('/', (req, res) => {res.send("What up!");});
app.listen(port);