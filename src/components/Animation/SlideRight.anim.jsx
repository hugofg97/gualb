import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlideRightAnim = (elements) => {
  elements.current.forEach((el, index) => {
    gsap.fromTo(
      el,
      {
        autoAlpha: 0,
        x: 200,
        // y: 100,
      },
      {
        duration: 1.5,
        autoAlpha: 1,
        ease: "power4.out",
        x: 0,
        y: 0,
        scrollTrigger: {
          className: `blocks`,
          trigger: el,
          start: "top center+=200",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

export default SlideRightAnim;
