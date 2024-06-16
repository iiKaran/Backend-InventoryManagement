const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
   customer: { type: String, required: true },
   
   status :{
    type: String ,
    enum: ["pending", "completed"],
    default:"pending"
    },
    items:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
    } ]
});
module.exports = mongoose.model("Order", orderSchema);