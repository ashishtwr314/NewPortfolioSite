

 function init(){
     const scroll = new LocomotiveScroll({
         el: document.querySelector('[data-scroll-container]'),
         smooth: true
     });
    
     gsap.registerPlugin(ScrollTrigger);
    
     const locoScroll = new LocomotiveScroll({
       el: document.querySelector("[data-scroll-container]"),
       smooth: true
     });
    
     locoScroll.on("scroll", ScrollTrigger.update);
    
    
     ScrollTrigger.scrollerProxy("[data-scroll-container]", {
       scrollTop(value) {
         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
       },  
       getBoundingClientRect() {
         return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
       },
    
       pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
     });
    
    
     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

     ScrollTrigger.refresh();
    
 }

  // init();

 const loader = document.querySelector(".loader")

const loadertimeline = gsap.timeline();

 loadertimeline.from(".loader h1:nth-child(1)", {
     y: 100,
     opacity: 0
 })
 loadertimeline.to(".loader h1:nth-child(1)", {
     y: -100,
     opacity: 0
 })

 loadertimeline.from(".loader h1:nth-child(2)", {
     y: 100,
     opacity: 0
 })


 loadertimeline.to(".loader .call-me-text", {
     x: -100,
     opacity: 0
 })


 loadertimeline.to("#ash", {
    opacity: 0
 })

 loadertimeline.to(".loader", {
     top: "-100%",
     duration: 2
 })



 loadertimeline.from(".nav", {
     y: -100, 
     opacity: 0,
     stagger: 0.5
 })

 loadertimeline.from(".text-ashisa", {
     y: -100,
     opacity: 0
 })


 loadertimeline.from(".skillset > div", {
    stagger: 0.2,
    x: 50,
    duration:0.5,
    opacity: 0
})



 loadertimeline.from(".text-fullstack", {
     x: -300,
     opacity: 0.5,
     duration: 0.5,
     scrollTrigger:{
         scrub: true,
         start: "top 100%",
         pin: true
     }
    
 })

 loadertimeline.from(".text-engineer", {
     x: 300,
     opacity: 0.5,
     duration: 0.5,
     scrollTrigger:{
         scrub: true,
         start: "top 100%",
         pin: true
     }
    
 })

 loadertimeline.from(".scrolldown", {
     y: -30,
     opacity: 0,
     duration: 1, 
     repeat: -1,
     yoyo: true
 })


 gsap.registerPlugin('x', 'y'); 

 document.addEventListener('DOMContentLoaded', () => {
   const customPointer = document.querySelector('.custom-pointer');

    
   gsap.to(customPointer, {
     x: 0,
     y: 0,
     ease: 'power3.out',  
     onUpdate: () => {
        // Update the transform property for centering the pointer
       customPointer.style.transform = `translate(-50%, -50%)`;
     },
   });

    // Update the pointer position on mousemove
   document.addEventListener('mousemove', (e) => {
     gsap.to(customPointer, {
       x: e.clientX,
       y: e.clientY,
       duration: 0.2,
     });
   });
 });


function splitWords(){
  const h1s = document.querySelectorAll(".animate-words");
  h1s.forEach((h1) => {
    h1.innerHTML = h1.innerText.split(" ").map((x) => "<span>"+x+"</span>").join(" ")
    
  })
}
splitWords();


loadertimeline.from(".animate-words span", {
  stagger: 0.5,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".animate-words span",
    target: "body",
    scrub: true,
    start: "top: 60%"
  }
 
})




function mapProjects(){
  const prods = projects.map((proj) => {
    return `
      <div class="relative project">
      <h1 class="text-6xl absolute  top-1/2 -translate-y-1/2">
        ${proj.title}
        <div class="flex  gap-3 items-center tech-used flex flex-wrap">
          ${proj.techs.map((x) => { return `<span class="badge">${x}</span>`}).join("|")}
        </div>
      </h1>
      <div class="h-[300px] shadow w-[80%] ml-auto z-10 bg-[url('./assets/${proj.image}')] imagecontainer" ></div>
     </div>
    `
  })

  document.querySelector(".projects").innerHTML = prods.join("")
}

mapProjects();