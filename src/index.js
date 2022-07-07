import router from "./routes/index"
import {targetElements, defaultProps} from "../src/css/animation/animations"
import initScrollReveal from "../src/css/animation/scripts/scrollReveal"
import initTiltAnimation from "../src/css/animation/scripts/tiltAnimation"
window.addEventListener("load", router)

let button1 = document.getElementById("bmenu-selected1") 
button1.addEventListener('click', async ()=>{
    await elegir("1")
    await router()
    await scroll()
})
let button2 = document.getElementById("bmenu-selected2") 
button2.addEventListener('click', async ()=>{
    await elegir("2")
    await router()
    await scroll()
})
let button3 = document.getElementById("bmenu-selected3") 
button3.addEventListener('click', async ()=>{
    await elegir("3")
    await router()
    await scroll()
})
let button4 = document.getElementById("bmenu-selected4") 
button4.addEventListener('click', async ()=>{
    await elegir("4")
    await router()
    await scroll()
})
let button5 = document.getElementById("bmenu-selected5") 
button5.addEventListener('click', async ()=>{
    await elegir("5")
    await router()
    await scroll()
})
let button6 = document.getElementById("bmenu-selected6") 
button6.addEventListener('click', async ()=>{
    await elegir("6")
    await router()
    await scroll()
})
let button7 = document.getElementById("bmenu-selected7") 
button7.addEventListener('click', async ()=>{
    await elegir("7")
    await router()
    await scroll()
})
let button8 = document.getElementById("bmenu-selected8") 
button8.addEventListener('click', async ()=>{
    await elegir("8")
    await router()
    await scroll()
})
let button9 = document.getElementById("bmenu-selected9") 
button9.addEventListener('click', async ()=>{
    await elegir("9")
    await router()
    await scroll()
})
let button10 = document.getElementById("bmenu-selected10") 
button10.addEventListener('click', async ()=>{
    await elegir("10")
    await router()
    await scroll()
})


function elegir(a){
    let targetURL = '#menu-selected' + a;
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}
function scroll(){
    let targetURL = '#menu-selected' ;
    let newURL = document.createElement('a');
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}


initScrollReveal(targetElements, defaultProps);
initTiltAnimation();