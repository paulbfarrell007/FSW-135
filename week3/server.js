const express = require ("express");
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const expressJwt = require('express-jwt')
app.use( express.json());

mongoose.connect('mongodb://localhost:27017/rock-the-vote',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false

},
() => console.log("Connected to the DB")
)
app.get("/",(req,res)=>{
    console.log("test")
    res.send('testing 1,2,3')
})
app.use("/users",require('./routes/authRouter'))
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use("/api/issues",require('./routes/issueRouter'))
app.use("api/comments",require('./routes/commentRouter'))

app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errorMessage:err.errorMessage})
})

app.listen(9000, () =>{
    console.log("The app is buzzin on port 9000")
});