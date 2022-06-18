const { error } = require('console');
const slugify= require('slugify');
const Category =require('../models/categorymodel');

function createCategories(categories,parentid=null){
    // const categoryList =[];
    // let category;
    // if(parentid=null){
    //    category= categories.filter(cat=>cat.parentid==undefined);
    // }else{
    //     category=categories.filter(cat=>cat.parentid==parentid);po
    // }
    // for (let cate of category){
    //     categoryList.push({
    //         _id:cate._id,
    //         name:cate.name,
    //         slug:cate.slug,
    //         children:createCategories(categories,cate._id)
    //     });
        
    // }
    return categories;
};

exports.addcategory = (req,res)=>{
    const categoryobj={
        name:req.body.name,
        slug:slugify(req.body.name)

    }
    if(req.body.parentid){
        categoryobj.parentid=req.body.parentid;
    }
    const cat =new Category(categoryobj);
    cat.save((error,category) =>{
        if(error) return res.status(400).json({error});
        if (category){
            return res.status(201).json({category});
        }

    });
}
exports.getcategories =(req,res)=>{
    Category.find({})
    .exec((error,categories)=>{
        if(error) return res.status(400).json({error});
        if (categories){
        
            const categoryList = createCategories(categories);

             res.status(200).json({categoryList});
        }

    });
    // return categorylist;

}