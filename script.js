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
    // console.log("starting",start)
})
window.addEventListener("touchmove",function(e){
    previous=e.changedTouches[0].clientY
    // console.log(previous)
    if(start>previous){
        bar.classList.remove("going-up")
        bar.classList.add("going-down")
    }
    else{
        bar.classList.remove("going-down")
        bar.classList.add("going-up")
    }
})


