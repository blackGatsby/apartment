import {showAlert} from './alerts.js'


    
 
let adv = document.getElementById('advert')

if(adv){

  adv.addEventListener('click',(e)=>{
     e.preventDefault();
     fetch("/advertise")
     .then(val=>{
        if(!val.ok){
            val.json()
            .then(ans=>{
                if(ans==='unauthorize')showAlert('error',ans.message)
                else showAlert('error',ans.message)
            })
        }else{
           const {url} = val
         
           location.assign(url)
        }
     })
   }) 

}

    
 let upd = document.getElementById('update')

 if(upd){

 document.getElementById('update').addEventListener('click',(e)=>{
     e.preventDefault();
     fetch("/update")
     .then(val=>{
        if(!val.ok){
            val.json()
            .then(ans=>{
                if(ans==='unauthorize')showAlert('error',ans.message)
                else showAlert('error',ans.message)
            })
        }else{
           const {url} = val
         
           location.assign(url)
        }
     })
   }) 

 }


let over = document.getElementById('overview')

if(over){

 over.addEventListener('click',(e)=>{
     e.preventDefault();
     fetch("/overview")
     .then(val=>{
        if(!val.ok){
            val.json()
            .then(ans=>{
                if(ans==='unauthorize')showAlert('error',ans.message)
                else showAlert('error',ans.message)
            })
        }else{
           const {url} = val
         
           location.assign(url)
        }
     })
   }) 

}




let del = document.getElementById('delete')

if(del){

del.addEventListener('click',(e)=>{
     e.preventDefault();
     fetch("/delete")
     .then(val=>{
        if(!val.ok){
            val.json()
            .then(ans=>{
                if(ans==='unauthorize')showAlert('error',ans.message)
                else showAlert('error',ans.message)
            })
        }else{
           const {url} = val
         
           location.assign(url)
        }
     })
   }) 


}

 

let prof = document.getElementById('profile')

if(prof){

prof.addEventListener('click',(e)=>{
     e.preventDefault();
     fetch("/profile")
     .then(val=>{
        if(!val.ok){
            val.json()
            .then(ans=>{
                if(ans==='unauthorize')showAlert('error',ans.message)
                else showAlert('error',ans.message)
            })
        }else{
           const {url} = val
         
           location.assign(url)
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

    
    
  


 let brd =  document.getElementById('board');

 if(brd){

    brd.addEventListener('click',(e)=>{
  
        e.preventDefault();

        fetch('/dash')
        .then(val=>{
            if(!val.ok){
                val.json()
                .then(ans=>{
                    if(ans.status==='unauthorize'){showAlert('error',ans.message); }
                    else{
                        alert(ans.message); location.reload(true)
                    }
                })
            }
            else{
              window.setTimeout(()=>{location.assign('/dash'),1000})  
            }
        })


    })

 }
 



let fm = document.getElementById('frms');



if(fm){

fm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let data = new FormData(e.target);

  fetch("/addApartmentPortal",{
    method:'Post',
    body:data
  })
  .then((val)=>{
    if(!val.ok){
     val.json()
     .then(ans=>{
        if(ans==='unauthorize') showAlert('error',ans.message)
            else{showAlert('error',ans.message)}
     })


    }else{
        location.assign('/overview')
    }
  })


})


}







 