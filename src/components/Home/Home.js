import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import HomeCard from '../HomeCard/HomeCard';
import useItems from '../hooks/useItems';
import './Home.css';

const Home = () => {
  const [services] = useItems();

  return (
    <div>
      <Banner> </Banner>

      {services.length ? (
        <div className="home-services pt-0 mt-0  container mx-auto">
          <div className="xl:pt-10 pt-0  text-center flex justify-center">
            <HomeCard service={services[0]}></HomeCard>
          </div>
          <div className=" text-center flex justify-center">
            <HomeCard service={services[1]}></HomeCard>
          </div>
          <div className=" xl:pt-10 pt-0 text-center flex justify-center  ">
            <HomeCard service={services[2]}></HomeCard>
          </div>
          <div className=" text-center flex justify-center ">
            <HomeCard service={services[3]}></HomeCard>
          </div>
        </div>
      ) : (
        console.log('hi')
      )}
    </div>
  );
};

export default Home;
