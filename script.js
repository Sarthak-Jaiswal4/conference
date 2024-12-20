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
    // console.log(page1.getBoundingClientRect())
    if(page1.getBoundingClientRect().bottom>0 && e.wheelDelta>0){
        bar.classList.remove("going-up")
        bar.classList.remove("going-down")
    }
    else if(e.wheelDelta<0){
        bar.classList.remove("going-up")
        bar.classList.add("going-down")
        // console.log("down")
    }
    else{
        // console.log("up")
        bar.classList.remove("going-down")
        bar.classList.add("going-up")
        // bar.classList.toggle("sticky")
    }
})

