import React from 'react';
import Banner from './banner/banner';
import Mileage from './mileage/mileage';
import Featured from './featured/featured';
import Explore from './explore/explore';

const Home = () => {
  return (
    <div>
      <Banner />
      <Mileage />
      <div className="px-10 md:px-[110px] py-10">
        <Featured />
        <Explore />
      </div>
    </div>
  );
};

export default Home;
