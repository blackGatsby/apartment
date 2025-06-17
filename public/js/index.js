
import {booked} from './stripe.js';
import {showAlert} from './alerts.js'

const del = document.getElementById('delete')

if(del){
  
del.addEventListener('click',(e)=>{

  e.preventDefault();

 let ans = window.confirm('are you sure you wish to delete this apartment');
 let url = document.URL;
 let id = url.split("/");
 let ids = id[id.length-1];

 if(ans){

fetch(`/landapartment/${ids}`,{
  method:'DELETE'
})
.then(value=>{

if(value.ok){
alert(`apartment deleted successfully`);
window.setTimeout(()=>location.assign(`/delete`),1000)
}
else{
  value.json()
  .then(ans=>alert(ans.message))
}

})

 }else{

location.assign('/delete')

 }

})

}





const bookBtn = document.getElementById('booker');


if(bookBtn){

  
 

bookBtn.addEventListener('click',(e)=>{

    const {apartmentId} = e.target.dataset;

    const {apartmentAvailability} = e.target.dataset;
console.log(`oops apartment is ${apartmentAvailability}`);

if(apartmentAvailability === 'not available'){
 return  showAlert("error",`sorry, apartment is ${apartmentAvailability}`);
}

e.target.textContent = 'Processing.....';

    booked(apartmentId)
})



}


document.getElementById('board').addEventListener('click',(e)=>{
    e.preventDefault();
    fetch('/dash')
     .then(val=>{
      if(!val.ok){
         val.json()
         .then(ans=>{
          if(ans.status==='unauthorize'){showAlert('error',ans.message); location.reload(true);}
          else{
            alert(ans.message); location.reload(true)
          }
         })
         }else{
        window.setTimeout(()=>location.assign('/dash'),1000)
        }
       })

      })



      document.getElementById('out').addEventListener('click',(e)=>{
       e.preventDefault();
       fetch(`/logout`)
       .then(val=>{
        if(val.ok){
            showAlert('success','logged out successfully');
            window.setTimeout(()=>location.assign('/'),1000)
        }
         })

    
      })



            





            

          

            
            
                         
          


           