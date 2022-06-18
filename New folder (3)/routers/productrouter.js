const express = require("express");
const { models } = require("mongoose");
const router =new express.Router();
const product = require("../models/productmodel");
const auth =require("../Auth/auth")
const upload = require("../uplodfile/file")



router.post("/product/insert",auth.customerGuard,(req,res)=>{
    const productname = req.body.productname;
    const productcategory= req.body.productcategory;
    const price =req.body.price;
    const description=req.body.description;
    const product_image =req.body.product_image;
    const product_quantity=req.body.product_quantity;
    const userid= req.customerInfo._id;


    const data = new product({
        productname:productname,
        product_image:product_image,
        product_quantity:product_quantity,
        productcategory:productcategory,
        price:price,
        description:description,
        userid:userid

    })
    data.save()
    .then()
    .catch()



})

module.exports= router;