import React from 'react';
import './HomeCard.css';

const HomeCard = (props) => {
  const { name, price, topic, backgroundImg } = props.service;
  const styleSheet = {
    position: 'relative',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    zIndex: '-4',
  };
  return (
    <div>
      <div
        style={styleSheet}
        class="container card   lg:w-96 md:w-80 w-64  pt-12 px-4 text-center  md:mx-5 mx-10   mb-10  shadow-lg rounded-lg"
      >
        <div style={{}} class="px-4 text-white  z-50  background flex-auto">
          <div class="text-white p-3 text-center inline-flex mr-56 items-center justify-center w-20 h-12 mb-5 shadow-lg rounded-full bg-green-600">
            <i class="text-xl font-bold">${price}</i>
          </div>
          <h6 class="text-xl my-5 sm:mt-10 md:m-0 lg:mt-10  font-bold">
            {name}
          </h6>
          <p class="mt-2 font-semibold text-md  sm:block hidden mb-4 text-blueGray-500">
            {topic}
          </p>
          <button className="homeCardBtn sm:text-2xl bg-green-600">
            order now
          </button>
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default HomeCard;
