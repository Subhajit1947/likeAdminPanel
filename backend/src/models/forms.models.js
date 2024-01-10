import mongoose,{Schema} from "mongoose"

const formschma=new Schema({
    name:{
        type:String,
        required:true
    },
    mob:{
        type:Number,
        required:true,
        maxLength:10,
        minLength:10
    },
    email:{
        type:String,
        reqiured:true,
        unique:true
    },
    hobbi:{
        type:String,
        required:true
    }
})
export const userform=mongoose.model('userform',formschma)