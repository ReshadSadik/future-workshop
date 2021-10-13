import React from 'react';
import Slideshow from '../Slider/Slider';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div class=" text-gray-900 ">
        <div class="container py-15 px-6 mx-auto flex flex-wrap items-center   justify-center">
          {/* image carousel slider start */}
          <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start  overflow-y-hidden  ">
            <Slideshow></Slideshow>
          </div>
          {/* image carousel slider end */}
          <div>
            <div
              class="my-4   text-white md:text-5xl
             text-xl italic font-bold text-center md:text-left slide-in-bottom-h1"
            >
              <h1 className="text-center mt-0 md:mt-20 font-mono uppercase">
                make
                <span className=" ml-5 font-bold text-green-500 md:text-7xl  text-4xl uppercase">
                  fitness
                </span>
                <br />
                your favourite habit!
              </h1>
            </div>
            <p class="leading-normal text-base md:text-xl mb-8 text-center text-green-400 mt-10 ml-10 md:text-left slide-in-bottom-subtitle ">
              We are here to guide your through your future journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
