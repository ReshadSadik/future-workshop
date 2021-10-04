import useItems from '../hooks/useItems';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services] = useItems();

  return (
    <div className="" style={{ background: '#e3deec' }}>
      <div className="services  mt-40">
        {services.map((service) => (
          <Service service={service}> </Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
