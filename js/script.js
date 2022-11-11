// gsap switch div horizontal

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".slide");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "power3",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});

// vanilla js scroll down for x scroll

function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}

var element = document.scrollingElement || document.documentElement;
element.addEventListener('wheel', transformScroll);

// go back btn

// const btn = document.querySelector('.back-btn');

// function goBack() {
//   TweenLite.to(window, 1, {scrollTo:{y:0}, ease:Power2.easeInOut})
// }

// btn.addEventListener("click", console.log("poopz"));

