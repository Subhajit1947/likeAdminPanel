import {Router} from "express";
import {createUser,fetchuser,deleteUser} from '../controllers/users.controllers.js'
const userRouter=Router()

userRouter.route('/').post(createUser)
userRouter.route('/').get(fetchuser)
userRouter.route('/:userid').delete(deleteUser)
export default userRouter

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