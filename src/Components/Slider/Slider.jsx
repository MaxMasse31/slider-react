import React from "react";
import leftChevron from "../../assets/left-arrow.svg";
import rightChevron from "../../assets/right-arrow.svg";

export default function Slider() {
  return (
    <>
      <p className="index-info">3/5 </p>

      <div className="slider">
        <p className="image-info">Bedroom</p>
        <img src="/images/img-3.jpg" alt="" className="slider-img" />

        <button className="navigation-button prev-button">
          <img src={leftChevron} alt="" />
        </button>

        <button className="navigation-button prev-button">
          <img src={rightChevron} alt="" />
        </button>
      </div>
    </>
  );
}
