import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import {userform} from '../models/forms.models.js'
import { ApiResponse } from "../utils/ApiResponse.js"
const createUser=asyncHandler(async(req,res)=>{
    const {email,mob,hobbi,name}=req.body
    console.log(email,mob,hobbi,name)
    if(
        [email,mob,hobbi,name].some((field)=>String(field)?.trim()==="")
    ){
        throw new ApiError(400,"all field are required")
    }
    try {
        const userres=await userform.create({
            name,email,mob,hobbi
        })
        return res.status(201).json(
            new ApiResponse(201,userres,"users created successfully")
        )
    } catch (error) {
        throw new ApiError(400,error.message||"error wenen create model")
    }
})
const fetchuser=asyncHandler(async(req,res)=>{
    try {
        const userres=await userform.find().all()
        return res.status(200).json(
            new ApiResponse(200,userres,"user fetched")
        )
    } catch (error) {
        throw new ApiError(400,error.message||"error wenen fetch model")
    }
})

const deleteUser = asyncHandler(async (req, res) => {
    const { userid } = req.params
    //TODO: delete video
    if(!userid){
        throw new ApiError(400,'userid is not found')
    }
    try {
        await userform.findByIdAndDelete(userid)
        return res.status(200).json(
            new ApiResponse(200,{},"video delete")
        )
    } catch (error) {
        throw new ApiError(400,error.message||'error in deteting model')
    }
})

export {createUser,fetchuser,deleteUser}

// app.post('/',async(req,res)=>{
//     let userdata=await userform.create(req.body)
//     res.json(userdata)
// })
// app.get('/',async(req,res)=>{
//     let udata=await userform.find()
//     res.json(udata)
// })
// app.post('/de',async(req,res)=>{
//     let duser=await userform.findOneAndDelete(req.body)
//     res.json({
//         message:'sucessfuly delete'
//     })
// })
// app.post('/sm',async(req,res)=>{
//     let sdata=req.body
//     sendemail(sdata)
//     res.json({
//         message:'mail send successfully'
//     })
// })