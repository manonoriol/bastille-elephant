//slide 1 black mask animation

var tl1 = new TimelineMax;

tl1.to('.mask', 2.8, {y:'-100vh', ease: Power2.easeInOut}, 2.5)

// gsap switch div horizontal

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".slide");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: false,
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});

// go back btn

gsap.registerPlugin(ScrollToPlugin);

const btn = document.getElementById('icon-s12');

btn.addEventListener('click', goBack);

function goBack() {
gsap.to(window, {duration: 3, scrollTo: {x: "min"}, ease: "power3"});
console.log("clicked");
};

//title animation gsap

gsap.registerPlugin(ScrollTrigger);

let tl2 = gsap.timeline({delay: 1});

tl2.from('.main-title', {
    y: 40,
    opacity: 0,
    duration: 2,
    ease: 'power4'
})  

let tl3 = gsap.timeline({delay: 1.6});

tl3.from('.sub-title', {
    y: 40,
    opacity: 0,
    duration: 2,
    ease: 'power4'
})  

// vanilla js scroll down for x scroll

function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
}

var element = document.scrollingElement || document.documentElement;
element.addEventListener('wheel', transformScroll);