require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("MongoDB Connected"))
.catch((err)=> console.error("MongoDB connection failed"))

app.get("/", (req , res)=>{
    res.send("Restaurant Backend server is running");
});

const PORT = process.env.PORT||5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));