import React from "react";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";
import "./slider.scss";
import { useState } from "react";
import Data from "../data/sliderData";

export default function Slider() {
  const [sliderValue, setSliderValue] = useState(3);

  let SliderActions = {
    handleDecrease: () => {
      if (sliderValue === 1) {
        setSliderValue(5);
      } else {
        setSliderValue(sliderValue - 1);
      }
    },

    handleIncrease: () => {
      if (sliderValue === 5) {
        setSliderValue(1);
      } else {
        setSliderValue(sliderValue + 1);
      }
    },
  };

  return (
    <>
      <p className="index-info">{sliderValue}/5 </p>

      <div className="slider">
        {Data.filter((item) => item.id === sliderValue).map((filteredItem) => (
          <p className="img-info" key={filteredItem.id}>
            {filteredItem.description}
          </p>
        ))}

        <img
          src={`/images/img-${sliderValue}.jpg`}
          alt=""
          className="slider-img"
        />

        <button
          onClick={SliderActions.handleDecrease}
          className="navigation-button prev-button"
        >
          <img src={leftChevron} alt="" />
        </button>

        <button
          onClick={SliderActions.handleIncrease}
          className="navigation-button next-button"
        >
          <img src={rightChevron} alt="" />
        </button>
      </div>
    </>
  );
}
