"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState, useEffect } from "react";

const spanStyle = {
  padding: "20px",
  background: "#00539F",
  color: "#ffffff",
  fontWeight: "bold",
  width: "100%",
  textAlign: "center",
};

const Slideshow = ({ slideImages }) => {
  const [divStyle, setDivStyle] = useState({
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundSize: "100%",
    height: "445px",
  });

  // This useEffect binds to the divStyle state which is used for styling the Slideshow
  // The useEffect contains a resize event listener, and whenever the event is trigged the handleResize function is called
  // The handleResize function adjusts the height of the slideshow, thus making it more responsive

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDivStyle({
          ...divStyle,
          height: "170px",
        });
      } else if (width >= 768 && width < 992) {
        setDivStyle({
          ...divStyle,
          height: "300px",
        });
      } else {
        setDivStyle({
          ...divStyle,
          height: "445px",
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [divStyle]);

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}>
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
