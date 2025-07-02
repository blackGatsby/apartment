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
          window.setTimeout(()=>location.assign('/login'),2000)
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


let board = document.getElementById('board');

if(board){
  board.addEventListener('click',(e)=>{
    e.preventDefault();
    fetch('/dash')
    .then(val=>{
      if(val.ok){
      window.setTimeout(()=>location.assign('/dash'),2000)
      }else{
       // if token has been tempered with or expired logout, by calling the logout api
       
       fetch('/logout')
       .then(val=>{
        if(val.ok){
          val.json()
          .then(ans=>{
            showAlert('success',`oops token has been tempered with so you are ${ans.status}`);
            window.setTimeout(()=>location.assign('/login'),3000)
          })
        }
       })
       
       
      }
    })
  })
}


let sch = document.getElementById('nav__search');

if(sch){
  sch.hidden = true;
}