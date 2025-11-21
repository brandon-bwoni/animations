import sprinkles from "../../assets/scroll-aminations/sprinkles.png";
import Donut from "./Donut";
import donut1 from "../../assets/scroll-aminations/donut-1.png";
import donut2 from "../../assets/scroll-aminations/donut-2.png";
import donut3 from "../../assets/scroll-aminations/donut-3.png";
import donut4 from "../../assets/scroll-aminations/donut-4.png";
import donut5 from "../../assets/scroll-aminations/donut-5.png";
import donut6 from "../../assets/scroll-aminations/donut-6.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip, ScrollTrigger } from "gsap/all";

const BuildScrollAnimations = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, Flip);

    // create a scoped GSAP context to clean up animations on unmount
    gsap.context(() => {
      // capture the state of the ".second" and ".third" elements before the animation starts
      const secondState = Flip.getState(".second");
      const thirdState = Flip.getState(".third");

      // Flip animation configuration (rotate 360 degrees in reverse, no easing, 1 second duration)
      const flipConfig = {
        rotate: -360,
        ease: "none",
        duration: 1,
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-1",
          start: "clamp(center center)",
          endTrigger: ".third",
          end: "clamp(center top)",
          scrub: 1,
          ease: "none",
        },
      });

      // First flip animation: morph ".donut" to match the layout of ".second"
      tl.add(Flip.fit(".donut", secondState, flipConfig));

      // Second flip animation: morph ".second" to match the layout of ".third", with delay of 0.5 seconds
      tl.add(Flip.fit(".donut", thirdState, flipConfig));
    });
  });

  return (
    <>
      <section className="relative h-screen section-1">
        <div>
          <img
            src={sprinkles}
            alt="Sprinkles"
            className="absolute top-0 left-4/12 h-full"
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="flex text-white text-[10rem] uppercase tracking-widest">
            <h1>DOU</h1>
            <h1 className="z-50">NUTS </h1>
          </div>

          <div
            style={{ backgroundImage: `url(${donut3})` }}
            className="donut absolute bg-cover bg-center h-96 w-96 -translate-x- 10 z-30"
          ></div>
        </div>
      </section>

      <section className="h-screen relative">
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex-1/2">
            <div className="absolute top-1/2  left-1/12 -translate-y-1/2 h-72 w-72 second"></div>
          </div>
          <div className="flex-1/2 p-20 space-y-4">
            <h1 className="text-4xl font-bold">
              Where Every Bite is Worth <br /> the Calories
            </h1>
            <p className="leading-7 opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center h-screen p-20">
        <div className="grid grid-cols-3 place-content-center gap-12">
          <Donut img={donut1} indx="1" />
          <Donut img={donut2} indx="2" />
          <Donut img={donut3} indx="3" />
          <Donut img={donut4} indx="4" />
          <Donut img={donut5} indx="5" />
          <Donut img={donut6} indx="6" />
        </div>
      </section>
    </>
  );
};

export default BuildScrollAnimations;
