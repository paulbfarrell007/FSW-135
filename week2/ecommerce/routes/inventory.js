const express=require("express")
const inventory=express.Router()
const uuid=require("uuid")
const model=require("../models/Inventory")
const newID=uuid.v4()

inventory.get
