import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const FeaturedCard = () => {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: any) => console.log(swiper)}
      className="my-8 mySwiper"
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        400: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {cards.map((card) => (
        <SwiperSlide className="" key={card}>
          <article className="h-full w-full rounded-lg">
            <div className="h-[220px] w-full shadow-md bg-gray-300"></div>
            <aside className="p-2">
              <h4 className="text-xl my-2 font-semibold ">Chestnuts</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate enim illo dolorem amet in ducimus dolor sit
                repudiandae adipisci eligendi.
              </p>
            </aside>
          </article>
          <div className="my-12"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedCard;
