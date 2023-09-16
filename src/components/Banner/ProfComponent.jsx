import React from "react";
import styled from "styled-components";
import {
  SiFiverr,
  SiUpwork,
  SiFacebook,
  SiBehance,
  SiWhatsapp,
} from "react-icons/si";
import { Slide } from "react-awesome-reveal";
import ReactWhatsapp from "react-whatsapp";

const ProfComponent = () => {
  return (
    <Container id="home" className="">
      <Slide direction="down">
        <Texts>
          <p className="text-5xl mt-14">
            Hello <span className="text-orange-500">We are</span>
          </p>
          <span className="text-7xl font-extrabold">Tri<span className="text-8xl text-orange-500">D</span>Crafters</span>
          <p className="text-6xl mt-4">3D Visualization Services Provider</p>
          <p className="text-2xl mt-3">
            Tri-D Crafters is a leading provider of cutting-edge 3D
            visualization services. Our company specializes in transforming
            ideas and concepts into stunning, realistic visual representations.
            With a team of skilled designers and state-of-the-art technology, we
            bring designs to life, allowing clients to visualize their projects
            in a captivating and immersive manner.
          </p>
          <div className="mt-16">
          <ReactWhatsapp
              number="+923224840169"
              className="!-mt-3 rounded-full "
            >
              <div className="bg-[#01be96] ">
                <SiWhatsapp
                  style={{
                    width: "210px",
                    height: "30px",
                  }}
                />
              </div>
            </ReactWhatsapp>
          </div>
          
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.upwork.com/freelancers/~017d02c9bf67817547"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#01be96]">
                <SiUpwork
                  style={{ width: "90px", height: "50px", padding: "10px" }}
                />
              </div>
            </a>
            <a
              href="https://www.fiverr.com/s/mk9qjN"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#01be96]">
                <SiFiverr style={{ width: "90px", height: "50px" }} />
              </div>
            </a>
            <a
              href="https://www.behance.net/sajidayaqoob"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#01be96]">
                <SiBehance
                  style={{ width: "90px", height: "50px", padding: "12px" }}
                />
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100091277553423"
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-[#01be96]">
                <SiFacebook
                  style={{ width: "90px", height: "50px", padding: "14px" }}
                />
              </div>
            </a>
          </div>
          {/* <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social> */}
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          {/* <img style={{ width: 800, height: 300 }} src={blender} alt="logo" /> */}
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
