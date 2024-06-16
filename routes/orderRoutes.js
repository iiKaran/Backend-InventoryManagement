const express = require('express');
const router = express.Router(); 
const {createAnOrder,changeStatus,getAllOrders} = require("../controllers/OrderControl")
router.post("/createAnOrder",createAnOrder);
router.post("/changeStatus",changeStatus);
router.get("/getAllOrders",getAllOrders);
module.exports = router