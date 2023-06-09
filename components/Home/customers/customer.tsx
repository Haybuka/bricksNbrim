import React from 'react';
import styles from './featured.module.css';
import cls from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CustomerCard from './card';
const Customers = () => {
  return (
    <section className="my-10">
      <h3 className="text-center text-2xl font-semibold">
        Words from our customers
      </h3>
      <p className="text-center my-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis,
        libero.
      </p>
      <aside className="md:px-[100px] bg-blue-950 px-6">
        <CustomerCard />
      </aside>
    </section>
  );
};

export default Customers;
