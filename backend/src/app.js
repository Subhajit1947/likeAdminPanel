import express from'express'
import cors from 'cors'
const app=express()
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
))
//accept json data
app.use(express.json({limit:'16kb'}))

//accept url data
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static('public'))


//routes import
import userRouter from './routes/users.routes.js'
import emailRouter from "./routes/email.router.js"
app.use("/api/users",userRouter)
app.use("/api/email",emailRouter)
export {app}