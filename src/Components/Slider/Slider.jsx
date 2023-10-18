import React from "react";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";
import "./slider.scss";
import { useState, useEffect } from "react";
import Data from "../data/sliderData";

export default function Slider() {
  const [sliderValue, setSliderValue] = useState(3);

  let SliderActions = {
    handleDecrease: () => {
      if (sliderValue === 1) {
        SliderActions.updateSliderValue(5);
      } else {
        SliderActions.updateSliderValue(sliderValue - 1);
      }
    },

    handleIncrease: () => {
      if (sliderValue === 5) {
        SliderActions.updateSliderValue(1);
      } else {
        SliderActions.updateSliderValue(sliderValue + 1);
      }
    },

    updateSliderValue: (step) => {
      setSliderValue((prevSliderValue) => {
        const newValue = prevSliderValue + step;

        // Implement the circular navigation as shown in the code
        if (newValue > 5) {
          return 1;
        } else if (newValue < 1) {
          return 5;
        } else {
          return newValue;
        }
      });
    },
  };

  useEffect(() => {
    const intervalID = setInterval(
      () => SliderActions.updateSliderValue(1),
      2000
    );

    return () => clearInterval(intervalID);
  }, []);

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
