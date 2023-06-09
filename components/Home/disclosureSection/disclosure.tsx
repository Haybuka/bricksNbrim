import React from 'react';
import styles from './disclosure.module.css';
import DisclosureComponent from './disclosure/disclosure';

const DisclosureSection = () => {
  const ratings = [
    { rating: 50, title: 'lorem', text: 'lorem ipsum' },
    { rating: 950, title: 'Projects', text: 'Completed' },
    { rating: '100+', title: 'awards', text: 'received' },
  ];
  return (
    <section className={styles.disclosure}>
      <aside className="md:block my-4 md:my-0 md:w-[380px] lg:w-[400px] bg-gray-200 h-[400px]"></aside>
      <article className="md:w-[400px] lg:w-[600px] md:px-0">
        <h4 className="text-2xl font-semibold">Reasons why people use us</h4>
        <DisclosureComponent />
      </article>
    </section>
  );
};

export default DisclosureSection;
