import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = ({ singlePackage }) => {
  const { _id, name, price, description, img, duration } = singlePackage;
  return (
    <div className="package py-5">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>Duration:{duration}</h5>
      <h5>Price: {price}</h5>
      <p className="px-3">{description}</p>
      <Link to={`/placeorder/${_id}`}>
        <button className="btn booking-button">Book package</button>
      </Link>
    </div>
  );
};

export default Package;