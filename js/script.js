//slide 1 black mask animation

let tl1 = new TimelineMax;

tl1.to('.mask', 2.8, {y:'-100vh', ease: Power2.easeInOut}, 2.5)

// gsap switch div horizontal

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.normalizeScroll(true);

let sections = gsap.utils.toArray(".slide");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=3000",
    pin: true,
    scrub: 1.5
  }
});

// go back btn

// gsap.registerPlugin(ScrollToPlugin);

// const btn = document.getElementById('icon-s12');

// btn.addEventListener('click', goBack);

// function goBack() {
// gsap.to(window, {duration: 3, scrollTo: 200, ease: "power3"});
// console.log("clicked");
// };

const btn = document.getElementById('icon-s12');

btn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

//main title animation gsap

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

// section-titles animation

gsap.registerPlugin(ScrollTrigger);

const titles = gsap.utils.toArray(".section-title");

titles.forEach((title, i) => {
  gsap.from(title, {
    y: 10,
    opacity: 0,
    duration: 1,
    ease: "power1",
    scrollTrigger: {
      trigger: "." + title.parentElement.parentElement.className.slice(6),
      containerAnimation: scrollTween,
      start: "left center",
      toggleActions: "play none none pause"
    }
  });
});

// paragraphs animation

gsap.registerPlugin(ScrollTrigger);

const paragraphs = gsap.utils.toArray(".paragraph");

paragraphs.forEach((para, i) => {
  gsap.from(para, {
    y: 5,
    opacity: 0,
    duration: 2,
    ease: "power1",
    scrollTrigger: {
      trigger: "." + para.parentElement.parentElement.className.slice(6),
      containerAnimation: scrollTween,
      start: "left center",
      toggleActions: "play none none pause"
    }
  });
});

// paris animation

gsap.registerPlugin(ScrollTrigger);

const paris = new SplitType('#paris');

gsap.to('.char', {
  y: 0,
  stagger: 0.2,
  delay: 0.2,
  duration: .4,
  ease: "power2",
  scrollTrigger: {
    trigger:'.slide-2',
    containerAnimation: scrollTween,
    start: "left center",
    toggleActions: "play none none pause"
  }
});

// slide-5 animation

gsap.to('.date', {
  y: 0,
  stagger: 0.4,
  delay: 0.2,
  duration: .4,
  ease: "power2",
  scrollTrigger: {
    trigger:'.slide-5',
    containerAnimation: scrollTween,
    start: "left center",
    toggleActions: "play none none pause"
  }
});