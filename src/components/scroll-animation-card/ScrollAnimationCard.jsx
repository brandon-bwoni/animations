import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ImLibrary } from "react-icons/im";
import { ImLab } from "react-icons/im";
import { RiSlideshowLine } from "react-icons/ri";

const data = [
  {
    id: 1,
    icon: <ImLibrary className="w-56 h-56" />,
    title: "Library",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    icon: <ImLab className="w-56 h-56" />,
    title: "Lab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    icon: <RiSlideshowLine className="w-56 h-56" />,
    title: "Slideshow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const ScrollAnimationCard = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards-wrapper",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
      },
    });

    tl.to(".card", {
      height: 130,
      stagger: 0.5,
    });
  });

  return (
    <div className="cards-wrapper min-h-screen p-16 bg-neutral-950 text-white overflow-hidden">
      {data.map((card) => {
        return (
          <div
            key={card.id}
            className="card p-6 border-b border-white/25 overflow-hidden"
          >
            <div className="flex gap-4 items-center h-32">
              <h1 className="text-xl -translate-y-4 opacity-80">{card.id}</h1>
              <h1 className="text-3xl"></h1>
            </div>

            <div className="flex items-center justify-between">
              <p className="w-[450px] opacity-70">{card.description}</p>
              <div className="w-56 h-56">{card.icon}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollAnimationCard;
