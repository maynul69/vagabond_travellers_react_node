import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import IntPackage from './IntPackage/IntPackage';
import './InternationaPackages.css'

const InternationaPackages = () => {
    const [intPackages, setintPackages] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/international")
        .then((res) => res.json())
        .then((data) => setintPackages(data));
    }, []);
    return (
      <div className="intPackages py-5 my-5 container">
        <h2 className="title my-5">International Packages</h2>
        <div className="intPackages-container">
          {intPackages.map((intPackage) => (
            <IntPackage
              key={intPackage._id}
              intPackage={intPackage}
            ></IntPackage>
          ))}
        </div>
      </div>
    );
};

export default InternationaPackages;