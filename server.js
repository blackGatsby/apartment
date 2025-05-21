import dotenv from 'dotenv';

dotenv.config({path:'./config.env'})



import mongoose from 'mongoose';
import tool from './app.js';


const {app} = tool


let port = process.env.PORT

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)


mongoose
.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then((con)=>{console.log('connected successfully')})

app.listen(port,()=>console.log(`listening on port ${port}`))



