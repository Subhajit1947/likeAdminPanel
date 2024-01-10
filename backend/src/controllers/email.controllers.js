import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import {sendemail} from '../utils/emailsend.js'


const sendemailuser=asyncHandler(async(req,res)=>{
    const {userd}=req.body
    if(!userd){
        throw new ApiError(400,"all field are required")
    }
    try {
        console.log('..............')
        userd.map((eml)=>{
            console.log(eml)
            sendemail(eml)
        })
        
        return res.status(200).json(
            new ApiResponse(200,{},"email sent successfully")
        )
    } catch (error) {
        throw new ApiError(400,"error in sent email")
    }
})
export {sendemailuser}