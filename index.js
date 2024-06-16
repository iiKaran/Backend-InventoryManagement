const express = require("express");
require("dotenv").config();
const cors = require("cors"); 
const cookieParser = require("cookie-parser")
const connectDB = require("./config/dbConnection");
const port = process.env.PORT || 4000; // port selection
const app = express(); // instance of the express server w
const orderRoutes = require("./routes/orderRoutes");
const ItemRoutes = require("./routes/ItemRoutes");
app.use(express.json()); 
app.use(cookieParser());
app.use(
    cors({
     origin:"*", 
     credentials:true
    })
   ); 
connectDB();
app.use("/assignment",orderRoutes);
app.use("/assignment",ItemRoutes);
// live
app.get("/",(req,res)=>{
    res.send("Live On render")
})
app.listen(port, console.log((`Server started on port ${port}`)));