import React from 'react';
import Form from './form';
import Aside from './aside';
const Quote = () => {
  const contactDeets = [
    {
      title: 'email',
      src: '/contact/mail.png',
      value: 'BricksBrim@gmail.com',
    },
    {
      title: 'Phone',
      src: '/contact/phone.svg',
      value: '09786275265479',
    },
    {
      title: 'Address',
      src: '/contact/address.png',
      value: '509 S Glenoaks Bloulevard Burbank, California.',
    },
  ];

  return (
    <section className="my-14 lg:flex md:px-[50px] lg:px-[110px] justify-center">
      <Aside contactDetails={contactDeets} />
      <Form />
    </section>
  );
};

export default Quote;
