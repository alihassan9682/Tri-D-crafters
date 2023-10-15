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
          <p className="text-4xl mt-6 sm:text-5xl md:text-6xl lg:text-7xl">
            Hello <span className="text-orange-500">We are</span>
          </p>
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
            Tri<span className="text-orange-500 text-8xl">D</span>Crafters
          </span>
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl mt-3">
            Tri-D Crafters is a leading provider of cutting-edge 3D
            visualization services. Our company specializes in transforming
            ideas and concepts into stunning, realistic visual representations.
            With a team of skilled designers and state-of-the-art technology, we
            bring designs to life, allowing clients to visualize their projects
            in a captivating and immersive manner.
          </p>
          <div className="mt-10 mb-6 flex flex-col gap-6">
           <span className="uppercase text-2xl font-bold"  >contact me</span> 
            <ReactWhatsapp
              number="+923224840169"
              className="!-mt-3 rounded-full"
            >
              <div className="bg-[#01be96] w-32 h-12  flex items-center justify-center rounded-3xl hover:transform hover:scale-[104%]">
                <SiWhatsapp
                  style={{
                    width: "210px",
                    height: "30px",
                    padding: "2px",
                  }}
                />
              </div>
            </ReactWhatsapp>
          </div>

          <span className="uppercase text-xl font-bold">Others</span>
          <div className="flex flex-wrap gap-3 items-center social-icons mt-2">
            <span>
              <a
                href="https://www.upwork.com/freelancers/~017d02c9bf67817547"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-[#01be96] rounded-t-3xl hover:transform hover:scale-[104%] ">
                  <SiUpwork
                    style={{
                      width: "90px",
                      height: "40px",
                      padding: "6px",
                    }}
                  />
                </div>
              </a>
            </span>
            <span>
              <a
                href="https://www.fiverr.com/s/mk9qjN"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-[#01be96] rounded-t-3xl hover:transform hover:scale-[104%]">
                  <SiFiverr
                    style={{
                      width: "90px",
                      height: "40px",
                      padding: "0px",
                    }}
                  />
                </div>
              </a>
            </span>
            <span>
              <a
                href="https://www.behance.net/sajidayaqoob"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-[#01be96] rounded-t-3xl hover:transform hover:scale-[104%]">
                  <SiBehance
                    style={{
                      width: "90px",
                      height: "40px",
                      padding: "6px",
                    }}
                  />
                </div>
              </a>
            </span>
            <span>
              <a
                href="https://www.facebook.com/profile.php?id=100091277553423"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-[#01be96] rounded-t-3xl hover:transform hover:scale-[104%]">
                  <SiFacebook
                    style={{
                      width: "90px",
                      height: "40px",
                      padding: "10px",
                    }}
                  />
                </div>
              </a>
            </span>
          </div>
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

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <div className="bg-[#01be96] w-20 h-8 flex items-center justify-center sm:w-32 sm:h-10">
      {icon}
    </div>
  </a>
);

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

  p {
    font-weight: 300;
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
