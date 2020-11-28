
//variables
const img =document.getElementById('imgLogo')
let widt = screen.width;

//const bgmobile = 'url("/images/hero-mobile.jpg")';
//const bgdesktop = 'url("/images/hero-desktop.jpg")';



window.addEventListener('resize', function(e){
    let width=e.srcElement.innerWidth;
    switch(true){
        case (width<767 || widt<767):
            backgroundmobile()
            break;
        case (width>=768 || widt>=768):
            backgrounddesktop()
            console.log(e.srcElement.innerWidth)
            break;
        default:
            break;
      }
})


const backgroundmobile=()=>{
    img.src="images/hero-mobile.jpg"
    //img.style.backgroundImage = bgmobile;
}
const backgrounddesktop=()=>{
    img.src="images/hero-desktop.jpg"
    console.log('mas grande')
    //img.style.backgraundImage = bgdesktop;
}


/*
    window.addEventListener('resize', (e)=>{
        let widt=e.srcElement.innerWidth;
    
          switch(true){
            case widt<=767:
                backgroundmobile()
                break;
            case widt>=767:
                backgrounddesktop()
                console.log(e.srcElement.innerWidth)
                break;
            default:
                break;
          }
    }) 
*/