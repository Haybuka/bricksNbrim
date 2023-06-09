import React from 'react';
import Banner from './banner/banner';
import Mileage from './mileage/mileage';
import Featured from './featured/featured';

const Home = () => {
  return (
    <div>
      <Banner />
      <Mileage />
      <div className="px-10 md:px-[140px] py-10">
        <Featured />
      </div>
    </div>
  );
};

export default Home;
