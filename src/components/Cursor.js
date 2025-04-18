import React, { useEffect, useRef } from "react";
import "./Cursor.css";

const Cursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const speed = 0.2; // Adjust this: 0.1 is slower, 0.3 is faster
  const bounceFactor = 10; // Factor to adjust the bounce effect

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      currentX.current += (mouseX.current - currentX.current) * speed;
      currentY.current += (mouseY.current - currentY.current) * speed;

      // Bounce effect: Add a small offset to simulate a bouncing effect within the ring
      const bounceX = Math.sin(currentX.current / bounceFactor) * 3; // Bouncing horizontally
      const bounceY = Math.cos(currentY.current / bounceFactor) * 3; // Bouncing vertically

      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX.current + bounceX}px`;
        cursorRef.current.style.top = `${currentY.current + bounceY}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${currentX.current}px`;
        ringRef.current.style.top = `${currentY.current}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const hoverElements = document.querySelectorAll("button, a, .interactive");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursorRef.current) {
          cursorRef.current.classList.add("cursor-hover");
        }
        if (ringRef.current) {
          ringRef.current.classList.add("ring-hover");
        }
      });

      el.addEventListener("mouseleave", () => {
        if (cursorRef.current) {
          cursorRef.current.classList.remove("cursor-hover");
        }
        if (ringRef.current) {
          ringRef.current.classList.remove("ring-hover");
        }
      });
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="cursor-container">
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </div>
  );
};

export default Cursor;
