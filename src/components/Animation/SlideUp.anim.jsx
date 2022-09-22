import React, { useRef } from "react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SlideUpAnim = (elements) => {
  elements.current.forEach((el, index) => {
    gsap.fromTo(
      el,
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "power4.out",
        x: 0,
        y: 0,
        scrollTrigger: {
          className: `blocks`,
          trigger: el,

          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};
export default SlideUpAnim;
