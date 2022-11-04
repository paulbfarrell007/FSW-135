const express = require('express');

const authRouter = express.Router();

//const { findOne } = require('../../week2/Inventory/BackEnd/models/inventory');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
authRouter.get("/",()=>{
    console.log("test")
})
// Signup
authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(user){
        res.status(403)
        return next(new Error('Name Already Exists'))
      }
      console.log(req.body)
      const newUser = new User(req.body)
      newUser.save((err, savedUser) => {
        if(err){
          res.status(500)
          return next(err)
        }
        console.log(savedUser)
        const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
        return res.status(201).send({ token, user: savedUser })
      })
    })
  })
  
  // Login
  authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      if(!user || req.body.password !== user.password){
        res.status(403)
        return next(new Error('Invalid Credentials'))
      }
      const token = jwt.sign(user.toObject(), process.env.SECRET)
      return res.status(200).send({ token, user })
    })
  })

 
/*
create
authRouter.post("/", (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedUser)
    })
  })
*/
module.exports = authRouter

