const express = require('express');
const router = express.Router(); 
const {createItem,updateItem,deleteItem,getAllItems} = require( '../controllers/ItemControl');
router.post("/createItem", createItem); 
router.post("/updateItem",updateItem); 
router.delete("/deleteItem",deleteItem);
router.get("/getAllItems",getAllItems);
module.exports = router