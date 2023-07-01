import React from 'react';
import cls from 'classnames';
import styles from './services.module.css';
const Index = () => {
  return (
    <main className="mt-20">
      {' '}
      <section className={cls(styles.banner)}>
        <h3 className="text-xl  md:text-3xl uppercase text-white md:ml-6 tracking-widest">
          Services
        </h3>
      </section>
      <section className="md:flex">
        <aside className="h-[450px] md:w-1/2 bg-red-400"></aside>
        <article className="flex justify-center items-center md:w-1/2 px-[50px] text-center">
          <div>
            <h3 className="font-semibold text-xl">Title of section</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              odio veniam atque rerum? Earum, ipsam explicabo aspernatur ducimus
              inventore iste.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Index;
