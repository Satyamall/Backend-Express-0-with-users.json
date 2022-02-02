
const express=require('express');
const app=express();
const port=4000;
const Users=require("./users.json");

app.get("/",(req,res)=>{
    res.send("Welcome to Home page");
})

app.get("/users",(req,res)=>{
    res.send(Users);
})

app.get("/users/:userid",(req,res)=>{
    const user= Users.find(user => user.id === Number(req.params.userid));
    if(!user)
    {
        res.status(400).send("User not found");
    }
    res.status(200).json(user);
})

app.listen(port,()=>{
    console.log(`Listen on port ${port}`);
})