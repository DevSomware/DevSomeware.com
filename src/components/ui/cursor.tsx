"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".cursor-text") as HTMLElement;

    if (!cursor) return;

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target as HTMLElement;
      gsap.to(cursor, { scale: 4 });
      if (link.classList.contains("views") && cursorText) {
        cursorText.style.display = "block";
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
      if (cursorText) {
        cursorText.style.display = "none";
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text" style={{ display: "none" }}>
        View
      </span>
    </div>
  );
};

export default Cursor;
