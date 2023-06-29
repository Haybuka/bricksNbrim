import React from 'react';
import styles from './explore.module.css';
import Button from '@/utils/button/button';
import HomeIcon from '/public/Home/explore/homeIcon.svg';
import Image from 'next/image';

const Explore = () => {
  return (
    <section className={styles.explore}>
      <aside className={styles.explore_bg}>
        <div className={styles.pill}>
          <Image
            src={HomeIcon}
            alt="icon"
            width={28}
            height={28}
            className="mx-1 rounded-xl"
          />
          <div className=" mx-2">
            <span className="block -my-1">$2000</span>
            <span className="block -my-1">View Properties</span>
          </div>
        </div>
      </aside>
      <article className="w-full my-4 md:my-0 md:w-[400px] px-2 md:px-0">
        <h4 className="text-2xl font-semibold capitalize">
          The most trusted real estate website
        </h4>
        <p className="my-3 md:my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id atque
          sapiente animi quidem voluptates maxime doloribus earum suscipit,
          consectetur, totam harum nemo similique eligendi, a illo. Quae
          doloribus, ea non hic harum iure a eligendi cum deleniti sint vel!
          consectetur, totam harum nemo similique el`igendi, a illo. Quae
          doloribus, ea non hic harum iure a eligendi cum deleniti sint vel!
        </p>
        <Button text="Explore now" propStyle="inline-block" />
      </article>
    </section>
  );
};

export default Explore;
