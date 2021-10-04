import React from 'react';
import Banner from '../Banner/Banner';
import useItems from '../hooks/useItems';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
  const [services] = useItems();

  const newServices = services.slice(0, 4);
  return (
    <div style={{ background: '#e3deec' }}>
      <Banner> </Banner>
      <div className="home-services container mx-auto">
        {newServices.map((service) => (
          <Service service={service}> </Service>
        ))}
      </div>
    </div>
  );
};

export default Home;
