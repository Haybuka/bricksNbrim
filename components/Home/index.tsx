import React from 'react';
import Banner from './banner/banner';
import Mileage from './mileage/mileage';
import Featured from './featured/featured';
import Explore from './explore/explore';
import Customers from '../customers/customer';
import DisclosureComponent from './disclosure/disclosure';

const Home = () => {
  return (
    <div>
      <Banner />
      <Mileage />
      <div className="px-10 md:px-[110px] py-10">
        <Featured />
        <Explore />
      </div>
      <Customers />
      <DisclosureComponent />
    </div>
  );
};

export default Home;
