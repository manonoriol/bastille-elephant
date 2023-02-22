const mqDesktops = window.matchMedia("(min-width: 1100px)");
const mqTablets = window.matchMedia("(min-width: 768px) and (max-width: 1099px)");
const mqMobiles = window.matchMedia("(max-width: 767px)");


function handleResponsiveDesign() {
  if (mqDesktops.matches) {
    //slide 1 black mask animation

    let tl1 = new TimelineMax();

    tl1.to(".mask", 2.8, { y: "-100vh", ease: Power2.easeInOut }, 2.5);

    // gsap switch div horizontal

    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger.normalizeScroll(true);

    let sections = gsap.utils.toArray(".slide");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 1.5,
      },
    });

    // go back btn

    const btn = document.getElementById("icon-s12");

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    //main title animation gsap

    gsap.registerPlugin(ScrollTrigger);

    let tl2 = gsap.timeline({ delay: 1 });

    tl2.from(".main-title", {
      y: 40,
      opacity: 0,
      duration: 2,
      ease: "power4",
    });

    let tl3 = gsap.timeline({ delay: 1.6 });

    tl3.from(".sub-title", {
      y: 40,
      opacity: 0,
      duration: 2,
      ease: "power4",
    });

    // vanilla js scroll down for x scroll

    function transformScroll(event) {
      if (!event.deltaY) {
        return;
      }

      event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    }

    var element = document.scrollingElement || document.documentElement;
    element.addEventListener("wheel", transformScroll);

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
          toggleActions: "play none none pause",
        },
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
          toggleActions: "play none none pause",
        },
      });
    });

    // paris animation

    gsap.registerPlugin(ScrollTrigger);

    const paris = new SplitType("#paris");

    gsap.to(".char", {
      y: 0,
      stagger: 0.2,
      delay: 0.2,
      duration: 0.4,
      ease: "power2",
      scrollTrigger: {
        trigger: ".slide-2",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none pause",
      },
    });

    // slide-5 animation

    gsap.to(".date", {
      y: 0,
      stagger: 0.4,
      delay: 0.2,
      duration: 0.4,
      ease: "power2",
      scrollTrigger: {
        trigger: ".slide-5",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none pause",
      },
    });
  } else if (mqTablets.matches || mqMobiles.matches) {
    //slide 1 black mask animation

    let tl1 = new TimelineMax();

    tl1.to(".mask", 2.8, { y: "-100vh", ease: Power2.easeInOut }, 2.1);

    //main title animation gsap

    gsap.registerPlugin(ScrollTrigger);

    let tl2 = gsap.timeline({ delay: 0.5 });

    tl2.from(".main-title", {
      y: 40,
      opacity: 0,
      duration: 2,
      ease: "power4",
    });

    let tl3 = gsap.timeline({ delay: 1.2 });

    tl3.from(".sub-title", {
      y: 40,
      opacity: 0,
      duration: 2,
      ease: "power4",
    });

    // go back btn

    gsap.registerPlugin(ScrollToPlugin);

    const btn = document.getElementById("icon-s12-up");

    btn.addEventListener("click", goBack);

    function goBack() {
      gsap.to(window, { duration: 3, scrollTo: 0, ease: "power3.out" });
      console.log("clicked");
    }

    // section-titles animation

    gsap.registerPlugin(ScrollTrigger);

    const titles = gsap.utils.toArray(".section-title");

    titles.forEach((title, i) => {
      gsap.from(title, {
        y: 10,
        opacity: 0,
        duration: 0.5,
        ease: "power1",
        scrollTrigger: {
          trigger: title.parentElement.parentElement,
          start: "left center",
          toggleActions: "play none none pause",
        },
      });
    });

    // paragraph animation

    gsap.registerPlugin(ScrollTrigger);

    const paragraphs = gsap.utils.toArray(".paragraph");

    paragraphs.forEach((para, i) => {
      gsap.from(para, {
        y: 5,
        opacity: 0,
        duration: 1,
        ease: "power1",
        scrollTrigger: {
          trigger: para.parentElement,
          start: "left center",
          toggleActions: "play none none pause",
        },
      });
    });

    // paris animation

    gsap.registerPlugin(ScrollTrigger);

    const paris = new SplitType("#paris");

    gsap.to(".char", {
      y: 0,
      stagger: 0.2,
      delay: 0.2,
      duration: 0.4,
      ease: "power2",
      scrollTrigger: {
        trigger: ".paragraph-s2",
        start: "left center",
        toggleActions: "play none none pause",
      },
    });

    // slide-5 animation

    gsap.to(".date", {
      x: 0,
      stagger: 0.2,
      delay: 0.1,
      duration: 0.2,
      ease: "power2",
      scrollTrigger: {
        trigger: ".slide-5",
        start: "left center",
        toggleActions: "play none none pause",
      },
    });
  }
};

// refresh on window resize to prevent js / css responsive bugs 

// function handleResize() {
//   if (mqDesktops.matches) {
//     window.location.reload();
//   } else if (mqTablets.matches || mqMobiles.matches) {
//     window.location.reload();
//   }
// };


window.addEventListener('load', handleResponsiveDesign);
// window.addEventListener('resize', handleResize);
