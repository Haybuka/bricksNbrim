import React from 'react';
import Form from './form';
const Quote = () => {
  return (
    <section className="my-10 lg:flex md:px-[50px] lg:px-[110px] justify-center">
      <aside className="bg-orange-700 text-white py-6 px-4 lg:w-[300px] my-6 lg:my-0 hidden lg:block">
        <ul>
          <li className="my-4">
            <p className="text-[14px]">Email</p>
            <p className="text-lg">BricksBrim@gmail.com</p>
          </li>
          <li className="my-4">
            <p className="text-[14px]"> Phone</p>
            <p className="text-lg">08272727289</p>
          </li>
          <li className="my-4">
            <p className="text-[14px]">Address</p>
            <p className="text-lg">
              509 S Glenoaks Bloulevard Burbank, California.
            </p>
          </li>
        </ul>
      </aside>
      <Form />
      ``
    </section>
  );
};

export default Quote;
