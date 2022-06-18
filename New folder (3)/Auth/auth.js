// const jwt = require("jsonwebtoken");

// module.exports.customerGuard = (req,res,next)=>{
//     try{
//         const token =req.headers.authorization.split("")[1];
//         const data = jwt.verify(token,"softwarica");
//         console.log(data);
//         customer.findOne({_id:data.customerId})
//         .then((cdata)=>{
//             req.customerInfo  = cdata;
//             next();
//         })
//         .catch(e);{
//             res.json({msg:"invalid token"})
//         });
//         .catch(e){
//                 res.json({msg:"invalid token"})



    
//     }

// }
const jwt = require("jsonwebtoken");
const customer = require("../models/customerModel");
const category = require("../models/categorymodel");
module.exports.customerGuard = (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        const data = jwt.verify(token, "softwarica");
        console.log(data);
        customer.findOne({_id : data.customerId})
        .then((cdata)=>{
            req.customerInfo = cdata;
            next();
        })
        .catch((e)=>{
            res.json({msg : "Inavlid Token"})
        })
    }
    catch(e){
        res.json({msg : "Inavlid Token"})
    }
}
