document.querySelector("#btn").addEventListener("click",()=>{
    document.querySelector("body").style.background = randomBg()
})
function randomBg(){
    return `hsl(`+ Math.floor(Math.random()*360)+",100%,50%";
}