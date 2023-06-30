import Button from '@/utils/button/button';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

interface Props {
  details: {
    title: string;
    text: string;
    img: string;
  };
}

const GDescription = ({ details }: Props) => {
  return (
    <article className="my-10 lg:w-1/3 lg:px-6">
      <h3 className=" my-3 uppercase text-xl">{details.title}</h3>

      <p className=" leading-6 my-3">{details.text}</p>

      <Button text="Get Quote" propStyle="inline-block" />
    </article>
  );
};

export default GDescription;
