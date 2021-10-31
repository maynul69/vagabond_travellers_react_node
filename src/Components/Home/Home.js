import React from 'react';
import Banner from './Banner/Banner';
import './Home.css'
import Packages from './Packages/Packages';
import WhyUs from '../Extra-Sections/WhyUs/WhyUs'
import InternationaPackages from '../Extra-Sections/InternationalPackages/InternationaPackages';


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Packages></Packages>
        <WhyUs></WhyUs>
        <InternationaPackages></InternationaPackages>
      </div>
    );
};

export default Home;