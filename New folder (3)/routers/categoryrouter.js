const express =require('express');
const auth =require('../Auth/auth')
const { error } = require('console');
const { addcategory, getcategories } = require('../controllers/categorycontroller');
const router = express.Router();



router.post('/category/create',addcategory);
router.get('/category/getcategory',getcategories);
module.exports=router;