import React from 'react';
import Banner from './banner/banner';
import Mileage from './mileage/mileage';
import Featured from './featured/featured';
import Explore from './explore/explore';
import Customers from './customers/customer';
import DisclosureSection from '../disclosureSection/disclosure';

const Home = () => {
  return (
    <div>
      <Banner />
      <Mileage />
      <div className="px-6 md:px[80px] lg:px-[110px] py-10">
        <Featured />
        <Explore />
      </div>
      <DisclosureSection />

      <Customers />
    </div>
  );
};

export default Home;
