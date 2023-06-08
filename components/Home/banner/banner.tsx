import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
import cls from 'classnames';
const Banner = () => {
  return (
    <section className="h-[600px] bg-gray-400 flex items-center p-5">
      <article className="py-6 px-[100px]">
        <h2 className="uppercase font-semibold text-6xl">
          <p>Find your</p>
          <p className="flex items-center">
            <span className={styles.hyphen}></span> Favorites
          </p>
          <p>real estate</p>
        </h2>
        <p className="w-auto md:w-[380px] my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo
          explicabo minima minus autem perspiciatis quo saepe consequatur
          aperiam sunt.
        </p>
        <button className="bg-black text-white py-2 px-6 my-4">
          Get Quote
        </button>
      </article>
      <aside className={cls(styles.banner_grid)}>
        <div className=" col-span-6 bg-yellow-400 row-span-2">
          {/* <Image */}
        </div>
        <div className=" col-span-6 bg-red-400"></div>
        <div className=" col-span-6 bg-red-400"></div>
      </aside>
    </section>
  );
};

export default Banner;
