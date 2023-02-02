import fs from 'fs';
import express from "express";
import path from "path";
import bodyParser from 'body-parser';
import cors from "cors";


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));



app.get("/",async(req,res)=>{
    let url = `https://randomuser.me/api/?page=${req.query.page}&results=${req.query.results}&seed=abc`;
    const data = await fetch(url);
    const response = await data.json();
    res.json(response)
});



app.listen(8000,async()=>{
    
    console.log("server running on Port 8000")
});