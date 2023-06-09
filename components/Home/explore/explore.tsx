import React from 'react';
import styles from './explore.module.css';
import Button from '@/components/button/button';
const Explore = () => {
  return (
    <section className={styles.explore}>
      <article className="md:w-[400px] px-2 md:px-0">
        <h4 className="text-2xl font-semibold capitalize">
          The most trusted real estate website
        </h4>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id atque
          sapiente animi quidem voluptates maxime doloribus earum suscipit,
          consectetur, totam harum nemo similique eligendi, a illo. Quae
          doloribus, ea non hic harum iure a eligendi cum deleniti sint vel!
          consectetur, totam harum nemo similique eligendi, a illo. Quae
          doloribus, ea non hic harum iure a eligendi cum deleniti sint vel!
        </p>
        <Button text="Explore now" />
      </article>
      <aside className="hidden md:block w-[400px] bg-gray-200 h-[400px]"></aside>
    </section>
  );
};

export default Explore;
