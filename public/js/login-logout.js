import {showAlert} from './alerts.js'
    
    
    
    
    
    document.getElementById('out').addEventListener('click',(e)=>{
       e.preventDefault();
       fetch(`/logout`)
       .then(val=>{
        if(val.ok){
            showAlert('success',`Logged out successfully`);
            window.setTimeout(()=>location.assign('/'),1000)
        }
       })

    
  })  
 