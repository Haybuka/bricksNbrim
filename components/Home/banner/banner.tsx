import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
import cls from 'classnames';
import Button from '@/utils/button/button';
const Banner = () => {
  return (
    <section className={cls(styles.banner)}>
      <aside className={cls(styles.banner_grid, 'hidden')}>
        <div className={cls(styles.grid_one)}></div>
        <div className={cls(styles.grid_two)}></div>
        <div className={cls(styles.grid_three)}></div>
      </aside>
      <aside className="block lg:hidden h-[300px] bg-red-400 my-4"></aside>
      <article className="py-6 px-2 md:px-[40px] lg:px-[100px]">
        <h2 className="uppercase font-semibold text-4xl md:text-5xl lg:text-6xl">
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
        <Button text="Get Quote" propStyle="inline-block" />
      </article>
    </section>
  );
};

export default Banner;
