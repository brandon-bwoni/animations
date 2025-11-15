import { useGSAP } from "@gsap/react";
import logo1 from "../../assets/logo.svg";
import logo2 from "../../assets/arrow.svg";
import logo3 from "../../assets/JBTechLogoHeader.svg";
import gsap from "gsap";

const MouseTrail = () => {
  useGSAP(() => {
    // Store the last mouse position
    let lastX = 0;
    let lastY = 0;
    let currentIndex = 1;

    let imgs = [logo1, logo2, logo3];

    const createTrail = (x, y) => {
      const img = document.createElement("img");
      img.classList.add("image-trail");
      img.src = imgs[currentIndex];
      document.querySelector(".trail-container").appendChild(img);

      // Add (% imgs.length) to make it loop through the imgs array forever: 0 → 1 → 2 → 0 → 1 → 3 ...
      // 0 % 3 = 0
      // 1 % 3 = 1
      // 2 % 3 = 2
      // 3 % 3 = 0 -- loops back
      currentIndex = (currentIndex + 1) % imgs.length;

      gsap.set(img, {
        x: x,
        y: y,
        scale: 0,
        opacity: 0,
      });

      gsap.to(img, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(img, {
        scale: 0.2,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.in",
      });
    };

    const handleMouseMove = (e) => {
      // Calculate how far the mouse has moved since the last position
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;

      // Get how far the mouse moved in a straight line since the last position
      const distance = Math.sqrt(dx * dx + dy * dy);
      // Only create trail if moved far enough
      if (distance > 60) {
        createTrail(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <div className="relative min-h-screen bg-neutral-950">
      <div className="trail-container absolute w-full h-full  overflow-hidden"></div>
    </div>
  );
};

export default MouseTrail;
