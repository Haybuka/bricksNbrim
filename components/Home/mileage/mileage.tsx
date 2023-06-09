import React from 'react';
import styles from './mileage.module.css';
const Mileage = () => {
  const ratings = [
    { rating: 50, title: 'lorem', text: 'lorem ipsum' },
    { rating: 950, title: 'Projects', text: 'Completed' },
    { rating: '100+', title: 'awards', text: 'received' },
  ];
  return (
    <section className={styles.mileage}>
      <aside className="hidden md:block w-[400px] bg-gray-200 h-[400px]"></aside>
      <article className="md:w-[600px] px-2 md:px-0">
        <h4 className="text-2xl font-semibold">
          What makes us different from others
        </h4>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id atque
          sapiente animi quidem voluptates maxime doloribus earum suscipit,
          consectetur, totam harum nemo similique eligendi, a illo. Quae
          doloribus, ea non hic harum iure a eligendi cum deleniti sint vel!
          consectetur, totam harum nemo similique eligendi, a illo. Quae
          doloribus, ea non hic harum iure a eligendi cum deleniti sint vel!
        </p>
        <section className="flex mt-3">
          {ratings.map((rate, id) => (
            <article key={id} className="ml-2">
              <h5 className="text-2xl font-semibold">{rate.rating}</h5>
              <p>
                <span className="block">{rate.title}</span>
                <span className="block">{rate.text}</span>
              </p>
            </article>
          ))}
        </section>
      </article>
    </section>
  );
};

export default Mileage;
