const express = require("express");
const app = express();
const port = 7500;

const inventoryRouter = require('./routes/inventory')
app.use("/inventory", inventoryRouter)
app.use(express.json())
const mongoose = require('mongoose')
const{Db}=require("mongodb")
mongoose.connect('mongodb://localhost:27017/inventorydb',
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
app.use((err,req,res,next)=>{console.log(err)
return res.send({errMsg:err.message})
})