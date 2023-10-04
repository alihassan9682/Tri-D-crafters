import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import Sofa from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/sofa.jpg";
import Product from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/product.jpg";
import Kitchen from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/kitchen.jpg";
import Layout from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/2dlayouts.jpeg";
import Archetecture from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/archetecture.jpeg";
import Graphics from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/graphics.png";
import Marketing from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/marketing.JPG";
import Character from "/home/dev/Documents/React/tri-Dcrafters/src/assets/pngs/character.jpeg";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <p className="text-6xl">
          My <span className="text-orange-500">services</span>
        </p>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            img={Archetecture}
            title={"Architecture "}
            disc={`Architectural excellence defines our services. We conceptualize and design structures that seamlessly 
            merge form and function. With a focus on sustainable solutions and aesthetic appeal, we bring spaces to life that inspire and endure.`}
            tags={[
              "architecture",
              "architectural excellence",
              "sustainable design",
              "form and function",
              "inspiring spaces",
            ]}
          />
        </Slide>
        <Slide direction="up">
          <Card
            img={Sofa}
            title={"Furniture"}
            disc={`Experience innovative furniture design that blends aesthetics with functionality. Our team creates bespoke furniture pieces that 
            redefine spaces. With attention to detail and ergonomic considerations, we ensure your furniture designs enhance both the visual 
            appeal and comfort of any environment.
            `}
            tags={[
              "furniture design",
              "innovative concepts",
              "bespoke pieces",
              "ergonomic design",
            ]}
          />
        </Slide>
        <Slide direction="right">
          <Card
            img={Product}
            title={"Product animation"}
            disc={`From concept to virtual reality, our product modeling and animation services add depth to your designs. 
            Our experts craft realistic 3D models and animations that showcase your products from every angle. 
            Witness your ideas come to life in a dynamic and engaging way.`}
            tags={[
              "modeling",
              "3D animation",
              "realistic models",
              "dynamic visuals",
              "virtual reality",
            ]}
          />
        </Slide>
        <Slide direction="left">
          <Card
            img={Layout}
            title={"2d Layouts"}
            disc={`Transform your visions into reality with our expert 2D layout services. Our skilled team crafts meticulous 2D layouts that bring your ideas to life.
             From concept to blueprint, we ensure precision and creativity in every detail. Trust us for top-notch 2D layouts that set 
             the foundation for your projects.`}
            tags={[
              "2D layouts",
              "blueprint design",
              "creative visualization",
              "precise planning",
              "project foundation",
            ]}
          />
        </Slide>
        <Slide direction="up">
          <Card
            img={Kitchen}
            title={"Interior Designs"}
            disc={`Transform spaces into havens with our exceptional interior design services. Our experts curate every element, 
            from color schemes to furnishings, to create harmonious and inviting interiors. Discover personalized designs 
            that reflect your style and elevate the ambiance.`}
            tags={[
              "interior design",
              "personalized spaces",
              "harmonious interiors",
              "inviting ambiance",
              "furnishings and color schemes",
            ]}
          />
        </Slide>
        <Slide direction="right">
          <Card
            img={Character}
            title={"Character Modeling and Animations"}
            disc={`Characters come to life through our expert character modeling and animation. We sculpt intricate 3D models and animate them with precision, 
            adding personality and emotion to your projects. Watch characters tell stories and engage audiences like never before`}
            tags={[
              "character modeling",
              "3D animation",
              "intricate models",
              "personality and emotion",
              "storytelling",
            ]}
          />
        </Slide>
        <Slide direction="right">
          <Card
            img={Marketing}
            title={"Digital marketing"}
            disc={`Unlock your brand's full potential with our expert team of digital marketing professionals. We provide a comprehensive range of services 
            tailored to boost your online presence and drive results.
            `}
            tags={[
              "Social Media Marketing",
              "PPC Advertising",
              "Content Marketing",
              "Email Marketing",
              "Analytics & Reporting",
            ]}
          />
        </Slide>
        <Slide direction="right">
          <Card
            img={Graphics}
            title={"Bed and Matress Designing"}
            disc={`Our talented team specializes in creating visually stunning and impactful designs to elevate your brand. From eye-catching logos 
            to captivating marketing materials, we offer a comprehensive range of design solutions. Let us transform your ideas into compelling 
            visuals that leave a lasting impression.`}
            tags={[
              "GraphicDesign",
              "CreativeDesign",
              "VisualIdentity",
              "Beds",
              "Matresses",
            ]}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
