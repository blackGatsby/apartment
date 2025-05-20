
const stripe = Stripe('pk_test_51RNxbFFlkOafule8XT4DQQBjTbYu6LzXvuCrY08spAhhkAKbNdHptu0G2ig7rGLSP2Fx4bKHMQ2UFxsnNeJv7uRK00iZSn7haO')




 export const booked = async tourId=>{


try{

  const result = await fetch(`http://localhost:3000/checkout-session/${tourId}`)

  if(!result.ok){
  throw new Error(`Failed to fetch checkout session: ${result.status}`)
  }

  const session = await result.json()

  console.log(session.session.id)

  await stripe.redirectToCheckout({
    sessionId : session.session.id
  })




}catch(err){console.log(err); alert(err)}


}




















