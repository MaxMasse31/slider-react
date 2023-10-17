import React from "react";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";
import "./slider.scss";
import Data from "../data/sliderData";
import { useState, useEffect } from "react";

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(3);

  function toggleImage(index) {
    // let newState;
    // if (index + sliderIndex > Data.length) {
    //   newState = 1;
    // } else if (index + sliderIndex < 1) {
    //   newState = Data.length;
    // } else {
    //   newState = index + sliderIndex;
    // }
    // setSliderIndex(newState);

    setSliderIndex((state) => {
      if (index + state > Data.length) {
        return 1;
      } else if (index + state < 1) {
        return Data.length;
      } else {
        return state + index;
      }
    });
  }

  //   animation gallerie
  useEffect(() => {
    const intervalID = setInterval(() => toggleImage(1), 2000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <p className="index-info">
        {sliderIndex}/{Data.length}
      </p>

      <div className="slider">
        <p className="img-info">
          {Data.find((obj) => obj.id === sliderIndex).description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt=""
          className="slider-img"
        />

        <button
          onClick={() => toggleImage(-1)}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="" />
        </button>

        <button
          onClick={() => toggleImage(+1)}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="" />
        </button>
      </div>
    </>
  );
}
