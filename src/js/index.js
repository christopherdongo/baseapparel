
//variables
const img =document.getElementById('imgLogo');
const email = document.getElementById('email');
const Button = document.getElementById('idbutton');
const form = document.getElementById('form');
const message = document.getElementById('messageError');
const valid =/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

//let widt = window.screen.width;
//redimencionar y cambiar el fondo de pantalla//
window.addEventListener('resize', function(e){
    let width=e.srcElement.innerWidth;
    switch(true){
        case (width|| width)<768 :
            backgroundmobile()
            break;
        case (width || widt )>768 :
            backgrounddesktop()
            break;
        default:
            break;
      }
})

form.addEventListener('submit', function(e){
     e.preventDefault()
        if(valid.test(email.value)){
        }else{ 
           MostrarAlerta();
           ShowError();
           EliminarAlerta();
        }
})

//mostrar y eliminar la alerta
const MostrarAlerta=()=>(message.innerHTML='Please provide a valid email', email.style.border="2px solid var(--primaryRed)");   
const ShowError=()=>( email.classList.add('iconserror'))
const EliminarAlerta=()=>(setTimeout(()=>{ message.innerHTML='', email.classList.remove('iconserror'),email.style.border="" },1000));


    //funciones que brindas los background segun el tamañana de pantalla
const backgroundmobile=()=>(img.src="images/hero-mobile.jpg")
const backgrounddesktop=()=>(img.src="images/hero-desktop.jpg")
