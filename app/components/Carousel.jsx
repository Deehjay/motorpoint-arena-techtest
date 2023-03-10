"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
  width: "100%",
  "text-align": "center",
};

const divStyle = {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  "background-size": "100%",
  height: "445px",
};
const slideImages = [
  {
    url: "https://www.motorpointarenanottingham.com/content/Images/megaBanners/vampiresrock_mega.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://www.motorpointarenanottingham.com/content/Images/FeaturedImages/HGT%20NOTTS%20790x295%20copy.jpg",
    caption: "Slide 2",
  },
  {
    url: "https://www.motorpointarenanottingham.com/content/Images/FeaturedImages/tipsytour_feature.png",
    caption: "Slide 3",
  },
];

const Slideshow = () => {
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
