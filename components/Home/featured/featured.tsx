import React from 'react';
import 'swiper/css';
import FeaturedCard from './card';
const Featured = () => {
  return (
    <section className="my-10">
      <h3 className="text-center text-2xl font-semibold">Featured Property</h3>
      <p className="text-center my-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
        libero.
      </p>
      <aside>
        <FeaturedCard />
      </aside>
    </section>
  );
};

export default Featured;
