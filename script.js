const lenis = new Lenis({
    duration:1.2,
    wheelMultiplier:1.1,
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

const bar=document.querySelector(".nav-bar")
const main=document.querySelector(".main")
const page1=document.querySelector(".page-1")
const sidemenu=document.querySelector(".sidemenu")
const schedule=document.getElementById("schedule")
const sponser=document.getElementById("sponser")
const register=document.getElementById("register")

main.addEventListener("mousewheel",function(e){
    if(page1.getBoundingClientRect().bottom>0 && e.wheelDelta>0){
        bar.classList.remove("going-up")
        bar.classList.remove("going-down")
    }
    else if(e.wheelDelta<0){
        bar.classList.remove("going-up")
        bar.classList.add("going-down")
    }
    else{
        bar.classList.remove("going-down")
        bar.classList.add("going-up")
    }
})
let start
let previous
window.addEventListener("touchstart",function(e){
    start=e.changedTouches[0].clientY
})
window.addEventListener("touchmove",function(e){
    previous=e.changedTouches[0].clientY
    // console.log(page1.getBoundingClientRect().bottom)
    if(page1.getBoundingClientRect().bottom>0 && start<previous){
        bar.classList.remove("going-up")
        bar.classList.remove("going-down")
    }
    else if(start>previous){
        bar.classList.remove("going-up")
        bar.classList.add("going-down")
    }
    else{
        bar.classList.remove("going-down")
        bar.classList.add("going-up")
    }
})

function menuopen(){
    // sidemenu.style.display="block"
    gsap.to(".sidemenu",{
        display:"block",
        y:"0px",
        duration:0.6,
        ease: "power1.in",
    })
    console.log("first")
}
function sideclose(){
    gsap.to(".sidemenu",{
        y:"-1000px",
        duration:0.6,
        ease: "power1.in",
    })
}
function gotoschedule(){
    schedule.scrollIntoView({
        behavior:"smooth",
    })
}
function sponserclk(){
    sponser.scrollIntoView({
        behavior:"smooth",
    })
}
function registerclk(){
    register.scrollIntoView({
        behavior:"smooth",
    })
}
