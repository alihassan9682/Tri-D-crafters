import React from "react";

const ClientSlider = (props) => {
  const { img } = props.item;
  return (
    <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img class="rounded-t-lg " src={img} style={{ width: 1080, height: 180}} alt="" />
    </div>
  );
};

export default ClientSlider;

