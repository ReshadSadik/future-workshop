import React from 'react';
import './Service.css';

const Service = (props) => {
  const { name, topic, instructor, img, price } = props.service;
  return (
    <div>
      <div class="containers">
        <img className="color-block" src={img} alt="" />
        <button>Price : {price}</button>

        <div className="content">
          <h1 className="title">{name}</h1>

          <p className="flavor-text">{topic}</p>
          <h1 className="title instructor">{instructor}</h1>

          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
