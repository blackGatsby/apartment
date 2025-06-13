import fs from 'fs';
import path from 'path';
import {createToken,verifyToken} from '../middleware/authenticate.js'
import model from '../model/landlordapartmentModel.js'
import bcrypt from 'bcrypt';





export async function signUp(req,res){

try{

let salt = bcrypt.genSaltSync(10);

let passwordSalted = bcrypt.hashSync(req.body.password,salt);

req.body.password = passwordSalted;

let info = await model.landlord.create(req.body);


 //createToken({id:info.id},res);


createToken({data:info},res);


res.status(200).json({
  status:"success",
  data:{
    values:info
  }
}) 



}catch(err){
res.status(400).json({
  status:"fail",
  message:err.message
})
}
}


export async function logIn(req, res) {
  const { email, paswd } = req.body;

  try {
    //const info = await model.landlord.findOne({ email, password: paswd });

 const info = await model.landlord.findOne({email});


    if (!info) {

      return res.status(400).json(`not found`);

    } else if(!(bcrypt.compareSync(paswd,info.password))){

return res.status(400).json(`not found`)

    }
   
    // ✅ Set cookie
    createToken({data:info},res);

   
res.status(200).json({
  status:"successfull",
  message:"Logged In successfully"
})  

  } catch (err) {
    console.error("Login error:", err);
  }
}


export async function logOut(req,res){

res.cookie('authToken','loggedout',{
  httpOnly:true,
  secure: 'strict',
  maxAge: 2 * 1000
})

res.status(200).json({status:'logged out'})

}






