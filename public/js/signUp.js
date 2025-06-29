import {showAlert} from './alerts.js'

let info = document.getElementById('frm');

if(info){

    let user = {};

    info.addEventListener('submit',(e)=>{
        
        e.preventDefault();

    let data = new FormData(e.target);

    data.forEach((v,i)=>{
         user[i] = v;
    })

    fetch('/signUp',{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
    })
    .then((val)=>{
        if(val.ok){
          showAlert('success','congratulations, you have signed up successfully');
          window.setTimeout(()=>location.assign('/dash'),2000)
        }
        else{
           showAlert('error','oops, error occured while creating an account please try again')
         

        }
    })

    })

}

//let login = document.getElementById('');

let board = document.getElementById('board');

if(board){

board.addEventListener('click',(e)=>{
    e.preventDefault();
    fetch('/dash')
    .then((val)=>{
        if(!val.ok){
          val.json()
          .then((ans)=>{
              if(ans.status==='unauthorize'){
   showAlert('error',`${ans.message}`)       
              }
              else{showAlert('error',`${ans.message}`)}
          })
        }else{
            window.setTimeout(()=>location.assign('/dash'),2000)
        }
    })
})

}



let srchFrm = document.getElementById('nav__search');

if(srchFrm){
    srchFrm.hidden = true;
}




