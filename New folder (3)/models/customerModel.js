const mongoose = require("mongoose");
const customer = new mongoose.Schema({
    firstname : {
        type : String,
        // required : true
    },

    lastname : {
        type : String,
        // required : true
    },

    email : {
        type : String,
        required : true
    },

    age : {
        type : Number,
        
    },

    date : {
        type : Date,
        
    },

    password : {
        type : String,
        required : true
        
    },



})

module.exports = mongoose.model('Customer', customer);