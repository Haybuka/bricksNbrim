import React from 'react';
import cls from 'classnames';
import Button from '@/utils/button/button';
import styles from './quote.module.css';
const Form = () => {
  return (
    <form className=" my-4 lg:shadow-md bg-white p-2 rounded-lg lg:px-5 w-full lg:w-[600px]">
      <h3 className="uppercase text-lg lg:text-2xl border-b-2 pb-3">
        Get Quote
      </h3>
      <label className="my-3">
        <p className={cls(styles.label)}>Name : </p>
        <input type="text" className={cls(styles.input)} />
      </label>
      <label className="my-3">
        <p className={cls(styles.label)}>Phone Number : </p>
        <input type="number" className={cls(styles.input)} />
      </label>
      <label className="my-3">
        <p className={cls(styles.label)}>Email : </p>
        <input type="email" className={cls(styles.input)} />
      </label>
      <label className="my-3">
        <p className={cls(styles.label)}>Message : </p>
        <textarea className={cls(styles.input)} />
      </label>
      <Button text="Submit" propStyle="text-center block " />
    </form>
  );
};

export default Form;
