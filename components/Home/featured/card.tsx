import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeaturedCard = () => {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: any) => console.log(swiper)}
      className="my-8"
    >
      {cards.map((card) => (
        <SwiperSlide className="" key={card}>
          <article className="h-full w-full rounded-lg">
            <div className="h-[220px] w-full shadow-md bg-gray-300"></div>
            <aside className="p-2">
              <h4 className="text-xl my-2 font-semibold">Chestnut</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate enim illo dolorem amet in ducimus dolor sit
                repudiandae adipisci eligendi.
              </p>
            </aside>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedCard;
