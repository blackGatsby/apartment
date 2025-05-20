import dotenv from 'dotenv';

dotenv.config({path:'./config.env'})



import mongoose from 'mongoose';
import tool from './app.js';


const {app} = tool


let port = process.env.PORT


mongoose
.connect(process.env.DATABASE_LOCAL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then(()=>console.log(`database connected successfully`))

app.listen(port,()=>console.log(`listening on port ${port}`))



