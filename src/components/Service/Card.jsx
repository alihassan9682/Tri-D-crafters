import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { Icon, disc, title, tags } = props;
  return (
    <Container>
      {/* <span className='green'><Icon/></span> */}
      <p className="text-2xl font-extrabold">{title}</p>
      <p className="text-sm ">{disc}</p>
      <div className="flex flex-wrap gap-3 items-center mt-2">
      {tags?.length > 0
        ? tags?.map((tag, idx) => (
             <span className={`bg-[#01be96] text-white text-xs font-medium px-2 py-1 rounded-full`}>
              {tag}
            </span>
          ))
        : ""}
        </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1rem;
  text-align: center;

  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

 
`;
