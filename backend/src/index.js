import dbconnect from "./db/index.js";
import { app } from './app.js';
import dotenv from 'dotenv'
dotenv.config({
    path:'./env'
})
dbconnect()
.then(()=>{
    app.listen(process.env.PORT||4000,()=>{
        console.log('server is listen at port',process.env.PORT||4000)
    })
    
})
.catch((err)=>{
    console.log('mongodb connection error',err)
})










