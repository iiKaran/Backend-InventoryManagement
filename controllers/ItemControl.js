const Item = require("../models/Item"); 
exports.createItem = async (req,res)=>{
    try {
        const {itemName, quantity} = req.body;
        const createdItem = await Item.create({itemName,quantity});
        const allItems = await Item.find({});
        return res.status(200).json({
            success: true, 
            message: "Item created successfully",
            data: allItems
        })
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}
exports.updateItem= async(req,res)=>{
    try {
        const {itemId,itemName, quantity} = req.body;
        if (!itemId) {
          return res.status(404).json({ message: "Item not found" });
        }
        
        let findItem = Item.findById(itemId); 
        let updateditem = null ;  
        if (!findItem) {
            return res.status(404).json({ message: "Item not found" });
          }
        if (itemName != null || quantity != null) {
          updatedItem = await Item.findByIdAndUpdate(itemId,{
            itemName:itemName, 
            quantity:quantity
          })
        }
        const allItems = await Item.find({});
        return res.status(200).json({
            success: true, 
            message: "Item updated successfully",
            data: allItems
        })
    
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}
exports.deleteItem= async(req,res)=>{
    try {
        const {itemId} = req.body;
        if (!itemId) {
          return res.status(404).json({ message: "Item not found" });
        }
        
        let findItem = Item.findById(itemId); 
        if (!findItem) {
            return res.status(404).json({ message: "Item not found" });
          }
       
          updatedItem = await Item.findByIdAndDelete(itemId);
        
        const allItems = await Item.find({});
        return res.status(200).json({
            success: true, 
            message: "Item deleted successfully",
            data: allItems
        })
    
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

exports.getAllItems= async(req,res)=>{
  try {
      const allItems = await Item.find({});
      return res.status(200).json({
          success: true, 
          message: "Items fetched successfully",
          data: allItems
      })
  
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}