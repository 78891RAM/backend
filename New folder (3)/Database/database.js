const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/customer_db",{
    useNewUrlParser : true,
    useUnifiedTopology : true
})