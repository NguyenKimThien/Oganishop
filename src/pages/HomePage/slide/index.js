import React from "react";
import Slider from "react-slick";
import "./style.scss";
import ItemSlider from "../../../components/itemSlider";
import slideData from "../../../data/slideData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <FaAngleRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <FaAngleLeft />
    </div>
  );
};
const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  console.log(slideData.length);
  return (
    <Slider {...settings}>
      {slideData.map((item, index) => (
        <div key={index} className="slide-item-wrapper">
          <ItemSlider src={item.src} text={item.title} />
        </div>
      ))}
    </Slider>
  );
};

export default CategorySlider;
