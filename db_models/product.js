const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{type:String,max:50,required:true,unique:true},
    desc:{type:String,required:true},
    categories:{type:Array,default:[]},
    img:{type:String,required:true},
    size:{type:String},
    color:{type:String},
    price:{type:Number,required:true}

},{timestamps:true});

const Product = mongoose.model('Product',productSchema);
module.exports={Product};