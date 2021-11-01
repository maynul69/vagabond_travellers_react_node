import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../useAuth";
import Package from "./Package/Package";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://nameless-hollows-80731.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  const { isLoading } = useAuth();
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div>
      <div className="title">
        <h2 className="mt-5">Our Packages</h2>
      </div>

      <div className="package-container container my-5">
        {packages.map((singlePackage) => (
          <Package
            key={singlePackage._id}
            singlePackage={singlePackage}
          ></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
