import dotenv from 'dotenv';

dotenv.config({path:'./config.env'})



import mongoose from 'mongoose';
import tool from './app.js';


const {app} = tool


let port = process.env.PORT

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

/*
this connects you to the hosted database
mongoose
.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then((con)=>{console.log('connected successfully')})
*/

mongoose
.connect(process.env.DATABASE_LOCAL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
})
.then((con)=>console.log('database connected successfully'))


app.listen(port,()=>console.log(`listening on port ${port}`))



