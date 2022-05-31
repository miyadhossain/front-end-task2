import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LeftArrowImg from "../../assets/left-arrow.svg";
import RightArrowImg from "../../assets/right-arrow.svg";
import AppContainer from "../utilis/AppContainer";

const imgArr = [
  {
    id: 1,
    source:
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    source:
      "https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 3,
    source:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2106&q=80",
  },
];

const SlickArrowLeft = ({ ...props }) => (
  <img src={LeftArrowImg} alt="prevArrow" {...props} />
);

const SlickArrowRight = ({ ...props }) => (
  <img src={RightArrowImg} alt="nextArrow" {...props} />
);

const Carousel = () => {
  return (
    <AppContainer className="pt-20">
      <Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        speed={500}
        autoplay={true}
        nextArrow={<SlickArrowRight />}
        prevArrow={<SlickArrowLeft />}
      >
        {imgArr.map((img) => (
          <img
            className="w-full h-[450px] object-cover rounded"
            key={img.id}
            src={img.source}
            alt="image"
          />
        ))}
      </Slider>
    </AppContainer>
  );
};

export default Carousel;
