import React from 'react';
import './Service.css';
import imgg from '../../images/Communication Secrets.jpg';

const Service = (props) => {
  const { name, topic, instructor, img, price } = props.service;
  return (
    <div>
      <div class="containers">
        <img className="color-block" src={imgg} alt="" />
        {/* <div className="color-block"></div> */}
        <button>Price : {price}</button>

        <div className="content">
          <h1 className="title">{name}</h1>

          <p className="flavor-text">
            Suggests the mysteries of the cosmos, the intrigue of what lies
            ahead, and the discoveries beyond where we are now.
          </p>
          <div style={{ display: 'flex' }}>
            <button>
              Add to Cart
              {/* <i className="fas fa-angle-right"></i> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
