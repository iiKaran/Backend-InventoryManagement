const Order = require("../models/Order");
exports.createAnOrder = async (req, res) => {
    try {
        const { customer, status, items } = req.body;
        const createdOrder = await Order.create({ customer, items });
        const allOrders = await Order.find({});
        return res.status(200).json({
            success: true,
            message: "Order created successfully",
            data: allOrders,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.changeStatus = async (req, res) => {
    const { orderId } = req.body;
  console.log("the req is", orderId)
    try {
      const order = await Order.findById(orderId);
    
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      // Toggle status between "Pending" and "Completed"
      order.status = order.status === 'pending' ? 'completed' : 'pending';
      await order.save();
      const allOrders = await Order.find({});
      res.status(200).json({ message: 'Order status updated successfully', data: allOrders, });
    } catch (error) {
      console.error('Error updating order status:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

exports.getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find({}).populate('items');
  
      res.status(200).json({ data: orders });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };