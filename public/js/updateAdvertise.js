import {showAlert} from './alerts.js'

const night = document.getElementById('frms');

if(night){
    night.addEventListener('submit',e=>{
        e.preventDefault();

        const {inform} = e.target.dataset;

      let data = new FormData(e.target);

      fetch(`/landapartment/${inform}`,{
        method:'PATCH',
        body:data
      })
      .then((val)=>{
         
        if(val.ok){
           showAlert('success','changes implemented successfully');
           window.setTimeout(()=>location.assign('/update'),2000)
        }else{
           val.json()
           .then((ans)=>{showAlert('error',`${ans.message}`)
          window.setTimeout(()=>location.assign('/'),2000)
          })

        }




      })
      .catch((err)=>{showAlert('error',`ooops, the patch request failed`)})







    })
}


let logout = document.getElementById('out');

if(logout){

  logout.addEventListener('click',(e)=>{
    e.preventDefault();
   
    fetch('http://localhost:3000/logout')
    .then((val)=>{
      if(val.ok){showAlert('success','logged out successfully');
        window.setTimeout(()=>location.assign('/'),2000)
      }
    })

  })

}