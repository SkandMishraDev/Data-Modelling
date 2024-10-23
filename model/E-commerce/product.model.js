import mongoose from "mongoose"
import { Category } from "./category.model";

const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    productImage:{
        type: String,
    },
    description:{
        required:true,
        type:String,
    },
    price:{
        type:Number,
        required:true,
        default:0,
    },
    stock:{
        type:Number,
        default:0,
    },
    review:{
        type:String,
    },
    category:{
        type:mongoose.Schema.Types.OjectId,
        ref:"Category",
        required:true,
    },
    owner:{
        types:mongoose.Schema.Types.OjectId,
        ref:"User"
    }
},{timestamps :true})

export const Product = mongoose.model("Product",productSchema);