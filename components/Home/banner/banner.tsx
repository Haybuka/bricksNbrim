import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
import cls from 'classnames';
const Banner = () => {
  return (
    <section className={cls(styles.banner)}>
      <aside className={cls(styles.banner_grid, 'hidden')}>
        <div className="h-full md:h-auto col-span-6 bg-yellow-400 row-span-2"></div>
        <div className="h-[280px] w-full md:h-auto col-span-6 bg-red-400"></div>
        <div className=" h-[280px] w-full md:h-auto col-span-6 bg-red-400"></div>
      </aside>
      <aside className="block md:hidden h-[300px] bg-red-400 my-4"></aside>
      <article className="py-6 px-3 md:px-[100px]">
        <h2 className="uppercase font-semibold text-4xl md:text-6xl">
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
    </section>
  );
};

export default Banner;
