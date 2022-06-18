// const express = require("express");
// const res = require("express/lib/response");
// const mongoose= require("mongoose");
// const app = express();
// app.use(express.json());
// mongoose.connect("mongodb://127.0.0.1:27017/firstdb",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true

// })

// const us =mongoose.model('user',{
//     username:{
//         type:String
//     },
//     password:{
//         type:String
//     },
//     email:{
//        type: String
//     },


    
// })

// app.post("/test",(req,res)=>{
//     res.send("this i stext")
// })
// app.delete("/user/delete/:id",(req,res)=>{
//     const id = req.params.id;
//     us.deleteOne({_id:id})
//     .then(()=>{
//         res.json({msg:"ok done bro deleted"})


//     })
//     .catch((e)=>{
//         res.json({msg:"sorry cnot deletes "})
//     })
    

// })

// app.put('/user/update',(req,res)=>{
//     const id = req.body.id;
//     const username = req.body.username;
//     us.updateOne({_id:id},{username:username})
//     .then(()=>{
//         res.json({message:"Updated"})
//     })
//     .catch((e)=>{
//         res.json({message:"Not uodated"})
//     })
// })

// app.get("/user/all",(req, res)=>{
//     user.find()
//     .then((result)=>{
//         res.send({data:result})
//     })
//     .catch((e)=>{
//         res.send({msg:"Try Again"})
//     })
// })
// app.get("/user/my/:us",  (req, res)=>{
//     const us = res.params.us;
//     us.find({username:us})
//     .then((result)=>{
//         res.json({data:result})
//     })
//     .catch()
// })

// app.post("/user/insert",(req,res)=>{
//     const username1 = req.body.username;
//     const password = req.body.password;
//     const email = req.body.email;


//     const data = new us ({
//         username:username1,
//         password:password,
//         email:email,
//     })
//     data.save()
//     .then(()=>{
//         res.json({msg:"ok done bro"});


//     })
//     .catch((e)=>{
//         res.json({msg:"wrong bro"});
//     });
 
// })
// app.listen(90);

const express = require("express");
const app =  express()
require("./Database/database");

app.use(express.json());
const customerRouter = require("./routers/customerroutes");
const categoryroutes =require('./routers/categoryrouter')
app.use(customerRouter);
app.use(categoryroutes);
app.listen(90)