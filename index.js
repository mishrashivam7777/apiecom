const express = require("express");
const cors = require("cors");
const app= express();



const port =process.env.PORT|| 8000;

const products_routes=require("./routes/products");

app.use(cors());

const apiData= require("./data.json");

app.get("/",(req,res) =>{
    res.send("hello i am live ");
});


app.use("/api/products",products_routes);

app.get("/service",(req,res) =>{
res.send(apiData);
});

app.listen(port,() =>{
    console.log("i am live again");
});
