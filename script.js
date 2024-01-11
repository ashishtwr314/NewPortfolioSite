

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

 window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};



const isMobile = window.mobileCheck();

if(isMobile){
  document.querySelector(".custom-pointer").style.display = "none"
}



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
     top: "-120%",
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


if(isMobile){
  loadertimeline.from(".text-fullstack", {
    opacity: 0
  })
  loadertimeline.from(".text-engineer", {
    opacity: 0
  })
}

 loadertimeline.from(".skillset > div", {
    stagger: 0.2,
    x: 50,
    duration:0.5,
    opacity: 0
})




if(!isMobile){
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
}
 

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