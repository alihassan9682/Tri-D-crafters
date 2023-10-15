import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import R1 from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/R1.jpeg";
import R2 from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/R2.jpeg";
import R3 from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/R3.jpeg";
import R4 from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/R4.jpeg";
import R5 from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/R5.jpeg";
import R6 from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/R6.jpeg";
import R7 from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/R7.jpeg";

let clients = [
  {
    img: R1,
  },
  {
    img: R2,
  },
  {
    img: R3,
  },
  {
    img: R4,
  },
  {
    img: R5,
  },
  {
    img: R6,
  },
  {
    img: R7,
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-orange-500 uppercase">
          testimonials
        </h1>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          what clients say
        </p>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;

const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
