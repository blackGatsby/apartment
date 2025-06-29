import jwt from 'jsonwebtoken';
import User from '../model/landlordapartmentModel.js'
let check = false;





export function createToken(user,res) {
  const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: '1h'
  });

  

  res.cookie('authToken', token, {
    httpOnly: true,
    sameSite: 'Strict',
   maxAge: 60 * 60 * 1000 // cookie expires in 1hr.
  
  });


}




export async function verifyToken(req,res,next){



    const token = req.cookies.authToken;

    if(!token){
      
        return res.status(400).json({
            status:'unauthorize',
            message:'please login first'
        });
    }
   
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
if(err) return res.status(400).json({
    status:'authorize',
    message:'please  token has been tempered with login again'
});

req.info = decoded.data

next();
    })
}


export async function isLoggedIn(req,res,next){


try{
const token = req.cookies.authToken;


if(!token){
  return res.status(400).json({
    status:'unauthorize',
    message: 'please login'
  })
}

const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);



//let home = Object.keys(decoded)

//let jam = Object.keys(decoded['data'])

//console.log(`yep now the values are ${decoded.data.firstName}`)

req.info = decoded.data;



res.locals.user = decoded.data



check= false;

if(req.url==='/delete'){check=true;}


next();
}catch(err){

res.status(401).json({
  status:"tempered token",
  message:"token has been tempered with"
})
  
  
}


}

export async function both(req,res,next){

  console.log(req.url)

  try{

    const token = req.cookies.authToken;

    if(token){
const decoded = jwt.verify(token,process.env.ACCESS_TOKEN);
req.info = decoded;

  res.locals.user = decoded;

  if(check){res.locals.delta=decoded}

next();
    }
    else{

        /** 
      res.status(400).json({
      status:"error",
      message:"no token found"  
      })
**/

next();

    }

  }catch(err){
   res.status(400).json({
      status:"error",
      message:"oops, token has been tempered with!!!"  
      })
  }
}
