const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
   itemName: { type: String, required: true },
   quantity:{
    type: Number,
    default: 100 , 
   }
});
module.exports = mongoose.model("Item", ItemSchema);