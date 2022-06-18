const mongoose = require("mongoose");
const product = new mongoose.Schema({
    productname : {
        type : String,
        required : true
    },
    productcategory : {
        type : String,
        required : true
    },

    price : {
        type : String,
        required : true
    },

     description: {
        type : String,
        required : true
    },

    product_image : {
        type : String,
        
    },

    product_quantity : {
        type : Date,
        
    },
    userid:{
       type: mongoose.Schema.Types.ObjectId,
       ref:'Customer'
    }

    
    




})

module.exports = mongoose.model('product', product);