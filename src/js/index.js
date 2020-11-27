
//variables
const img =document.getElementById('imgLogo')
const width = screen.width;

img.addEventListener('click', function(e){
    console.log(e)
})

/*
if(width>765){
   console.log('holaaaaa')    
}*/
window.onload;

window.addEventListener('resize', (e)=>{
    let widt=e.srcElement.innerWidth;

      switch(true){
        case widt<767:
            backgroudmobile()
            break;
        case widt>767:
            backgrouddesktop()
            break;
        default:
            break;
      }
})

const backgroudmobile=()=>{
    img.src="images/hero-mobile.jpg"
}
const backgrouddesktop=()=>{
    img.src="images/hero-desktop.jpg"
}

