const express=require("express")
const inventory=express.Router()
const uuid=require("uuid")
const model=require("../models/Inventory")
const newID=uuid.v4()

inventory.get("/", (req, res, next) => {
    model.find((err, inventory) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(inventory)
    })
  })

  inventory.post("/", (req, res, next) => {
    const newItem = new model(req.body)
    newItem.save((err, savedMovie) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedItem)
    })
  })

  inventory.delete("/:itemId", (req, res, next) => {
    model.findOneAndDelete(
      {_id: req.params.itemId}, 
      (err, deletedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Item deleted ${deletedItem.item} from the database`)
      }
    )
  })

  inventory.put("/:itemId", (req, res, next) => {
    model.findOneAndUpdate(
      { _id: req.params.itemID},
      req.body,
      {new: true},
      (err, updatedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedItem)
      }
    )  
  })
  module.exports=inventory