import React from 'react';
import img from '../../images/undraw_Bibliophile_re_xarc.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div class=" text-gray-900 ">
        <div class="container py-15 px-6 mx-auto flex flex-wrap    justify-center">
          <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 class="my-4 text-3xl md:text-5xl text-white font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
              Learn to Work and be Successful
            </h1>
            <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle ">
              We are here to guide your through your future journey!
            </p>

            <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in"></div>
          </div>
          <div>
            <img className="banner-img" src={img} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
