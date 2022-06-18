const express = require("express");
const bcryptjs = require("bcryptjs");
const{getMaxListeners} = require("process");
const router = new express.Router();
const Customer = require("../models/customerModel");
const jwt = require("jsonwebtoken");
const auth = require("../Auth/auth");
const { route } = require("express/lib/application");
router.post("/customer/insert", (req,res)=>{
    const email = req.body.email;
    Customer.findOne({email:email})
    .then((cust_data)=>{
        if(cust_data = null){
            res.json({msg: "Email already exists"});
            return;
        }
        // console.log(cust_data)
    })
    .catch()
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    // const email = req.body.email;
    const age = req.body.age;
    const date = req.body.date;
    const password = req.body.password;
    bcryptjs.hash(password, 10, (e, hashed_pw)=>{
        const data = new Customer({
            firstname:firstname,
            lastname: lastname,
            email:email,
            age:age,
            date:date,
            password:hashed_pw
        })
        data.save()
        .then(()=>{res.json({msg: "Registered"})})
        .catch((e)=>{res.json({e})})
    })
})
  //for login
  router.post("/customer/login",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    Customer.findOne({email : email})
    .then((cust_data)=>{
        if(cust_data==null){
            res.json({msg : "Inavlid Credentials"})
            return;
        }
        bcryptjs.compare(password, cust_data.password, (e, result)=>{
            if(result == false){
                res.json({msg : "Invalid credentials"})
                return;
            }
            // now everything is valid..
            // it creates the token for the logged in user
            //the token stored the logged in user
           const token = jwt.sign({customerId : cust_data._id}, "softwarica");
           res.json({token : token});
        })
    })
    .catch()
})



// this is dash board route for customer
router.get("/customer/dashboard",auth.customerGuard,(req,res)=>{
    // console.table(req);
    res.json(req.customerInfo);
})
// this is dashboard update route
router.put("/customer/update",auth.customerGuard,(req,res)=>{
    const id = req.customerInfo._id;
    const firstname = req.body.firstname;

    Customer.updateOne({ _id: id }, { firstname: firstname })

        .then(function () {

            res.json({ msg: "update" })



        })

        .catch(function () {

            res.json({ msg: "Try again" })

        })
    // res.body._id.customerId.
     

})
// 
router.delete("/comment/delete",auth.customerGuard,(req,res)=>{
    res.json({"msg":"deleted"});
})
module.exports = router;