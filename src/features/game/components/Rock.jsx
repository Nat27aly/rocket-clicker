import React, { useState, useEffect } from "react";
import "./particles.css";
import useRockStore from "../stores/rock-store.js";

export default function Rock() {
  const [shaking, setShaking] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const incrementPoints = useRockStore((state) => state.incrementPoints);
  const uid = useRockStore((state) => state.uid); 

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX - 900, y: event.clientY - 763 });
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (shaking) {
      setShaking(false);
    }
  }, [shaking]);

  function handleClick() {
    incrementPoints(uid);
    setShaking(!shaking);
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }
  };
  return (
    <>
      <div
        draggable="false"
        className="select-none flex items-center justify-center rock-position"
      >
        <button
          draggable="false"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={`select-none ${
            shaking ? "" : "shake"
          } focus:outline-none transition transform duration-200 ease-in-out hover:scale-105 particleButton`}
        >
          <img
            draggable="false"
            className=" cursor-pointer select-none w-35 sm:w-42 md:w-43 lg:w-62 xl:w-65 2xl:w-70"
            src="/rock.svg"
            alt="rock click"
          />
          <div
            draggable="false"
            className={`select-none w-35 sm:w-42 md:w-43 lg:w-62 xl:w-65 2xl:w-70 particleButton particles hidden md:block ${
              shaking ? "" : "animated"
            }`}
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
            }}
          ></div>
        </button>
      </div>
    </>
  );
}
