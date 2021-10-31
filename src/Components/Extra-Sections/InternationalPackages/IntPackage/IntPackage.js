import React from 'react';
import { Link } from 'react-router-dom';
import './IntPackage.css'

const IntPackage = ({intPackage}) => {
    const { _id, name, price, description, img } = intPackage;
  return (
    <div className="Intpackage py-5">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <p className="px-3">{description}</p>
      <Link to={`/booking/${_id}`}>
        <button className="btn booking-button">
          Book {name.toLowerCase()}
        </button>
      </Link>
    </div>
  );
};

export default IntPackage;