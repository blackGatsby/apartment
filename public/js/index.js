import {showAlert} from './alerts.js'
import {booked} from './stripe.js' // when you are not connected to the internet some of the buttons will malfunction so you have to be connected to the internet





 let brd =  document.getElementById('board');

 
if(brd){
  brd.addEventListener('click',(e)=>{
    e.preventDefault();

fetch('/dash')
.then(val=>{
  if(!val.ok){
val.json()
.then(ans=>{
  if(ans.status==='unauthorize')showAlert('error',`${ans.message}`)
    else showAlert('error', `${ans.message}`)
})
  }else{
 window.setTimeout(()=>location.assign('/dash'),1000)   
  }
})






  })
}




let outt = document.getElementById("out")

if(outt){

  outt.addEventListener('click',(e)=>{
       e.preventDefault();
       fetch(`/logout`)
       .then(val=>{
        if(val.ok){
            showAlert('success',`Logged out successfully`);
            window.setTimeout(()=>location.assign('/'),1000)
        }
       })

    
  })  

}







 


let del = document.getElementById('delete')

if(del){
  del.addEventListener('click',(e)=>{

     e.preventDefault();

     let ans = window.confirm('are you sure you wish to delete this apartment');

const {apartmentDelete} = e.target.dataset;

     if(ans){

fetch(`/landapartment/${apartmentDelete}`,{
method:'DELETE'
})
.then(value=>{
  if(value.ok){
    showAlert('success','apartment deleted successfully');
    window.setTimeout(()=>location.assign('/delete'),2000)
  }else{
value.json()
.then((ans)=>showAlert('error',`${ans}`))
  }

})






     }



  })
}


let book = document.getElementById('booker');

if(book){
  
book.addEventListener('click',(e)=>{
  e.preventDefault();

  const {apartmentId} = e.target.dataset;

  const {apartmentAvailability} = e.target.dataset;

  if(apartmentAvailability === 'not available'){
    return showAlert('error', 'sorry, apartment is not available');
  }

  e.target.textContent = 'Processing.....';

  booked(apartmentId);

})

}


const sch = document.getElementById('nav__search');

if(sch){
  
sch.hidden = true;

}


