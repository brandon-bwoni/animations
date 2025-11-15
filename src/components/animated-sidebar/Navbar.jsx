import { useState } from "react";

import img1 from "../../assets/navbar/img1.jpg";
import img2 from "../../assets/navbar/img2.jpg";
import img3 from "../../assets/navbar/img3.jpg";
import img4 from "../../assets/navbar/img4.jpg";
import img5 from "../../assets/navbar/img5.jpg";
import img6 from "../../assets/navbar/img6.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  //   Define which images correspond to which menu link
  const imageGroups = {
    home: ["home-1", "home-2"],
    about: ["about-1", "about-2"],
    project: ["project-1", "project-2"],
  };

  useGSAP(() => {
    if (isClick) {
      // Hide all images initially
      gsap.set(".imgs-wrapper img", {
        clipPath: "inset(0% 100% 0% 0%)",
      });
    }
  }, [isClick]);

  useGSAP(() => {
    gsap.utils.toArray(".imgs-wrapper img").forEach((img) => {
      gsap.to(img, {
        clipPath: "inset(0% 100% 0% 0%)",
        duration: 0.5,
        ease: "power2.out",
      });
    });

    if (activeLink && imageGroups[activeLink]) {
      // Animate only images for the active link

      imageGroups[activeLink].forEach((id) => {
        gsap.to(`[data-id='${id}']`, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power2.inOut",
        });
      });
    }
  }, [activeLink]);

  return (
    <nav className="fixed w-full p-10 z-40 flex flex-col items-center justify-between text-white">
      <div className="w-full flex justify-between">
        <h1 className="text-2xl">logo</h1>
        <div
          onClick={() => setIsClick(!isClick)}
          className="cursor-pointer z-50"
        >
          {isClick ? "CLOSE" : "menu"}
        </div>
      </div>

      <div
        className={`${
          isClick ? "h-full" : "h-0"
        } bg-neutral-900 inset-0 overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between">
          <div className="p-20 w-1/2 text-3xl space-y-5">
            <p
              onMouseEnter={() => setActiveLink("home")}
              onMouseLeave={() => setActiveLink(null)}
              className="cursor-pointer"
            >
              Home
            </p>
            <p
              onMouseEnter={() => setActiveLink("about")}
              onMouseLeave={() => setActiveLink(null)}
              className="cursor-pointer"
            >
              About
            </p>
            <p
              onMouseEnter={() => setActiveLink("project")}
              onMouseLeave={() => setActiveLink(null)}
              className="cursor-pointer"
            >
              Projects
            </p>
          </div>

          <div className="imgs-wrapper flex flex-wrap gap-10">
            <img
              src={img1}
              alt=""
              className="h-72 w-96 object-cover -translate-y-60"
              data-id="home-1"
            />
            <img
              src={img2}
              alt=""
              className="h-72 w-96 object-cover -translate-y-60"
              data-id="home-2"
            />
            <img
              src={img3}
              alt=""
              className="h-72 w-96 object-cover -translate-y-60"
              data-id="about-1"
            />
            <img
              src={img4}
              alt=""
              className="h-72 w-96 object-cover -translate-y-60"
              data-id="about-2"
            />
            <img
              src={img5}
              alt=""
              className="h-72 w-96 object-cover -translate-y-60"
              data-id="project-1"
            />
            <img
              src={img6}
              alt=""
              className="h-72 w-96 object-cover -translate-y-60"
              data-id="project-2"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
