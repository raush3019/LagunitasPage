function show(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
show();


// gsap.to(".main>img",{

//     scrollTrigger:{
//           trigger:".main > img",
//           scroller:".main",
//           start:"top 5%",
//           end : "top -380%",
//           pin:true,
//           scrub:1,
//     },

//     rotate:-15,
//     stagger:0.05,
// })

// gsap.to(".main>img",{
//   scrollTrigger: {
//     trigger: ".main>img",
//     scroller: ".main",
//     start:"top 40.8%",
//     end:"top -66%",
//     scrub: 1.2,
//     pin:true,
//     markers: true
// },  

// scale: .4,
// stagger: 0.05,
// },)



gsap.to(".bottle",{
  scrollTrigger: {
    trigger: ".bottle",
    scroller: ".main",
    start:"top 5%",
    end:"top -422%",
    pin:true,
    scrub: 1,
    // markers: true
},
rotate: -15,
stagger: 0.05,
})

gsap.to(".bottle",{
  scrollTrigger: {
    trigger: ".bottle",
    scroller: ".main",
    start:"top 4.8%",
    end:"top -46%",
    scrub: 1.2,
    pin:true,
    // markers: true
},  
scale: .4,
stagger: 0,
},)


gsap.from(".one img",{
  opacity:0,
  duration:3
})

gsap.from(".one h1",{
  opacity:0,
  duration:1
})

gsap.from(".six .l",{

  x:-100,
  duration:2,
  scrollTrigger:{
    trigger:".six .l",
    scroller:".main",
    scrub:true,
  }
})
gsap.from(".six .r",{

  x:100,
  duration:2,
  scrollTrigger:{
    trigger:".six .r",
    scroller:".main",
    scrub:true,
  }
})