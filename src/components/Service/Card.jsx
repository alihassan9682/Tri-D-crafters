import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const { img, disc, title, tags,navigation } = props;
  return (
    <div className="flex items-center w-full justify-center bg-zinc-700 hover:cursor-pointer hover:transform hover:scale-[104%] border border-stone-900 shadow-lg ">
    <a href={navigation} target="_blank" rel="noreferrer">
      <div className="max-w-xs">
        <div className="photo-wrapper p-2 ">
          <img
            className="w-56 h-56 rounded-full mx-auto border border-stone-800 object-cover"
            src={img}
            alt="img"
          />
        </div>
        <div className="shadow-xl rounded-lg py-3">
          <div className="p-2">
            <h3 className="text-center text-xl green font-medium leading-8">
              {title}
            </h3>
            <div className="text-center text-gray-400 text-sm font-semibold">
              <p>{disc}</p>
            </div>
            <div className="flex flex-wrap gap-3 items-center mt-2">
              {tags?.length > 0
                ? tags?.map((tag, idx) => (
                    <span
                      className={`bg-[#d37c0a] text-white text-xs font-medium px-2 py-1 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
  );
};

export default Card;

