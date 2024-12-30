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
        gsap.to("nav",{
            y:"0px"
        })
    }
    else if(e.wheelDelta<0){
        bar.classList.remove("going-up")
        bar.classList.add("going-down")
        gsap.to("nav",{
            y:"-100px"
        })
    }
    else{
        bar.classList.remove("going-down")
        bar.classList.add("going-up")
        gsap.to("nav",{
            y:"0px"
        })
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
const text=new SplitType(".quote",{
    type: "lines",
});
const abouttext=new SplitType(".about",{
    type: "chars",
});
const headingtext=new SplitType(".speakheading",{
    type: "chars",
});
const headingimp=new SplitType(".headingimp",{
    type: "chars",
});
const headingthem=new SplitType(".headingthem",{
    type: "chars",
});
const headingspon=new SplitType(".headingspon",{
    type: "chars",
});
const headingreg=new SplitType(".headingreg",{
    type: "chars",
});

const tl=gsap.timeline()
tl.from("nav",{
    y:"-200px",
    opacity:0,
    duration:0.8,
    scrollTrigger:{
        trigger:".page-1",
    }
})
tl.from(".hero-para",{
    y:"150px",
    opacity:0,
    duration:0.8,
    delay:0.9,
    scrollTrigger:{
        trigger:".page-1",
    }
})
tl.from(text.lines,{
    y:"130px",
    stagger:0.15,
    opacity:0,
    ease: "power1.inOut",
    duration:0.6,
    rotateZ:5,
    delay:1,
    // transformOrigin:0,
    scrollTrigger:{
        trigger:".quote-cont",
        // markers:true,
        start:"top 75%",
        end:"bottom 80%",
        yoyo:true,
        scrub:true,
        // markers:true,
    }
})
tl.from(abouttext.chars,{
    y:"30px",
    stagger:0.1,
    opacity:0,
    ease: "power1.inOut",
    duration:0.25,
    rotateZ:5,
    scrollTrigger:{
        trigger:".about",
        start:"top 90%",
        end:"bottom 100%",
        yoyo:true,
        scrub:true,
        // markers:true,
    }
})
tl.from(".about-para",{
    y:"130px",
    stagger:0.05,
    opacity:0,
    ease: "power1.inOut",
    duration:0.3,
    rotateZ:3,
    scrollTrigger:{
        trigger:".page-3",
        // markers:true,
        start:"top 75%",
        end:"bottom 80%",
        yoyo:true,
        scrub:true,
    }
})
tl.from(headingtext.chars,{
    y:"10px",
    stagger:0.05,
    opacity:0,
    ease: "power1.inOut",
    duration:0.3,
    rotateZ:3,
    scrollTrigger:{
        trigger:".speaker-heading",
        // markers:true,
        start:"top 75%",
        end:"bottom 60%",
        yoyo:true,
        scrub:true,
    }
})
tl.from(".photo",{
    stagger:0.05,
    opacity:0,
    ease: "power1.inOut",
    duration:0.3,
    scrollTrigger:{
        trigger:".collage",
        // markers:true,
        start:"top 75%",
        end:"bottom 90%",
        yoyo:true,
        scrub:true,
    }
})
tl.from(headingimp.chars,{
    y:"10px",
    stagger:0.05,
    opacity:0,
    ease: "power1.inOut",
    duration:0.5,
    rotateZ:3,
    scrollTrigger:{
        trigger:".imp-heading",
        // markers:true,
        start:"top 75%",
        end:"bottom 40%",
        yoyo:true,
        scrub:true,
    }
})
tl.from(headingthem.chars,{
    y:"10px",
    stagger:0.05,
    opacity:0,
    ease: "power1.inOut",
    duration:0.5,
    rotateZ:3,
    scrollTrigger:{
        trigger:".theme-heading",
        // markers:true,
        start:"top 75%",
        end:"bottom 40%",
        yoyo:true,
        scrub:true,
    }
})
tl.from(headingspon.chars,{
    y:"10px",
    stagger:0.05,
    opacity:0,
    ease: "power1.inOut",
    duration:0.5,
    rotateZ:3,
    scrollTrigger:{
        trigger:".headingspon",
        // markers:true,
        start:"top 75%",
        end:"bottom 40%",
        yoyo:true,
        scrub:true,
    }
})
tl.from(headingreg.chars,{
    y:"10px",
    stagger:0.05,
    opacity:0,
    ease: "power1.inOut",
    duration:0.5,
    rotateZ:3,
    scrollTrigger:{
        trigger:".headingreg",
        // markers:true,
        start:"top 75%",
        end:"bottom 40%",
        yoyo:true,
        scrub:true,
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const marqueeSetup = (id) => {
      const marquee = document.querySelector(`#${id}`);
      const containerWidth = marquee.parentElement.offsetWidth;
      const contentWidth = marquee.scrollWidth;

      const clones = Math.ceil(containerWidth / contentWidth) + 1;
      for (let i = 0; i < clones; i++) {
        marquee.innerHTML += marquee.innerHTML;
      }

      gsap.fromTo(
        marquee,
        { x: -contentWidth }, // Start off-screen to the left
        {
          x: 0, // Animate to the original position
          duration: 90, // Adjust speed
          ease: "linear",
          repeat: -1, // Infinite loop
        }
      );
    };

    marqueeSetup("marquee");
    marqueeSetup("marquee2");
  });

  document.addEventListener("DOMContentLoaded", () => {
    const marqueeSetup = (id) => {
      const marquee = document.querySelector(`#${id}`);
      const containerWidth = marquee.parentElement.offsetWidth;
      const contentWidth = marquee.scrollWidth;

      const clones = Math.ceil(containerWidth / contentWidth) + 1;
      for (let i = 0; i < clones; i++) {
        marquee.innerHTML += marquee.innerHTML;
      }

      gsap.fromTo(
        "#marquee1",
        { x: 0 },
        { x: -contentWidth, duration: 90, ease: "linear", repeat: -1 }
      );
    };

    marqueeSetup("marquee1");
});
document.addEventListener("DOMContentLoaded", () => {
    const marqueeSetup = (id) => {
      const marquee = document.querySelector(`#${id}`);
      const containerWidth = marquee.parentElement.offsetWidth;
      const contentWidth = marquee.scrollWidth;

      const clones = Math.ceil(containerWidth / contentWidth) + 1;
      for (let i = 0; i < clones; i++) {
        marquee.innerHTML += marquee.innerHTML;
      }

      gsap.fromTo(
        marquee,
        { x: -contentWidth }, // Start off-screen to the left
        {
          x: 0, // Animate to the original position
          duration: 30, // Adjust speed
          ease: "linear",
          repeat: -1, // Infinite loop
        }
      );
    };

    marqueeSetup("marquee3");
  });

const containerWidth = window.innerWidth;
      gsap.fromTo(
        "#scrollText",
        { x: containerWidth }, // Start off-screen to the left
        {
          x: -containerWidth*1.8, // Move off-screen to the right
          scrollTrigger: {
            trigger: ".page-6", // Element to trigger the animation
            start: "top top", // Start the animation when the top of the element hits the center of the viewport
            end: "bottom bottom", // End the animation when the bottom of the element hits the top of the viewport
            scrub: true, // Smooth animation tied to scroll
            pin: true, // Pin the element while the scroll is in this range
          },
          ease: "linear",
        }
      );
