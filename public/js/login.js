
import {showAlert} from './alerts.js'


       let user = {}
      document.getElementById('frm').addEventListener('submit', (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        data.forEach((v,i)=>{
            user[i] = v;
        })

        fetch('/logino',{
            method:'Post',
            headers:{
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body:JSON.stringify(user)
        })
        .then((val)=>{
            if(val.ok){
                
                showAlert('success','Logged in successfully');
                window.setTimeout(()=>location.assign('/dash'),1000)
            }
            else{
                showAlert('error', `incorrect loggins please try again`)
            }
        })
      
      })




      document.getElementById('board').addEventListener('click',(e)=>{
    e.preventDefault();
    fetch('http://localhost:3000/dash')
     .then(val=>{
      if(!val.ok){
         val.json()
         .then(ans=>{
          if(ans.status==='unauthorize'){showAlert('error',`${ans.message}`)}
          else{
            showAlert('error',ans.message); location.reload(true)
          }
         })
      }else{
        window.setTimeout(()=>location.assign('/dash'),1000)
      }
     })

   })


let srchFrm = document.getElementById('nav__search');


if(srchFrm){
  srchFrm.hidden = true;

}
