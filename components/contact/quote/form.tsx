import React from 'react';
import cls from 'classnames';
import Button from '@/utils/button/button';

const Form = () => {
  return (
    <form className=" my-4 shadow-md bg-white p-2  lg:px-5 w-full lg:w-[600px]">
      <h3 className="uppercase text-xl lg:text-2xl">Get Quote</h3>
      <label className="my-3">
        <p className={cls('uppercase tracking-wider my-4')}>Name : </p>
        <input
          type="text"
          className={cls(
            'shadow-md border w-full p-3 rounded-lg focus:border-orange-700 outline-orange-700'
          )}
        />
      </label>
      <label className="my-3">
        <p className={cls('uppercase tracking-wider my-4')}>Phone Number : </p>
        <input
          type="number"
          className={cls(
            'shadow-md border w-full p-3 rounded-lg focus:border-orange-700 outline-orange-700'
          )}
        />
      </label>
      <label className="my-3">
        <p className={cls('uppercase tracking-wider my-4')}>Email : </p>
        <input
          type="email"
          className={cls(
            'shadow-md border w-full p-3 rounded-lg focus:border-orange-700 outline-orange-700'
          )}
        />
      </label>
      <label className="my-3">
        <p className={cls('uppercase tracking-wider my-4')}>Message : </p>
        <textarea
          className={cls(
            'shadow-md border w-full p-3 rounded-lg focus:border-orange-700 outline-orange-700'
          )}
        />
      </label>
      <Button text="Submit" propStyle="text-center block" />
    </form>
  );
};

export default Form;
