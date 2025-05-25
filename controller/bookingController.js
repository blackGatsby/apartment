import model from '../model/landlordapartmentModel.js';

import Stripe from 'stripe';



export async function getCheckOutSession(req,res,next){

const host = req.headers.host;
const fullUrl = `https://${host}${req.url}`;
alert(fullUrl)
try{

    const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY)


const house = await model.apartment.findById(req.params.tourID);

//console.log(house.pic1.filename)

const session = await stripe.checkout.sessions.create({
    payment_method_types:['card'],
    success_url:`${req.protocol}://${req.get('host')}/`,
    cancel_url:`${req.protocol}://${req.get('host')}/tenantoverview`,
    client_reference_id: req.params.tourID,
    line_items:[
        {

   price_data:{
    currency:'usd',
    unit_amount: house.price,
    product_data:{
        name: house.property_title,
        description:house.description,
        images:[`${fullUrl}/uploads/${house.pic1.filename}`],
       // https://apartment-09ae.onrender.com/uploads/682e03f5f94bbc0100de0a91-curren.png
    },
   },
   quantity:1,
          }
        ],
        mode:'payment'
})


res.status(200).json({
    status:'success',
    session
})

}catch(err){

    console.log(`ooops, an error occured while booking!!!  \n ${err}`)
}


}