import mongoose from "mongoose"

const orderSchema =new mongoose.Schema({
    orderPrice:{
        type: Number,
        requiured:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[{
            productItems:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            },
            quantity:{
                type:Number,
            },
        }]
    },
    address:{
        type:String,
        reuired:true
    },
    orderStatus:{
        type:String,
        enum:["Pending","Cancelled","Delivered"],
        default:"Pending"
    }
},{timestamps :true})

export const Order = mongoose.model("Order",orderSchema)