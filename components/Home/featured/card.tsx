import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import styles from './featured.module.css';

SwiperCore.use([Autoplay]);
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const FeaturedCard = () => {
  const cards = [
    {
      title: 'Minimalism',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/Home/featured/minimalism.jpg',
    },
    {
      title: 'Mid-century modern',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/Home/featured/modern.jpg',
    },
    {
      title: 'Art Deco',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/Home/featured/art_deco.jpg',
    },
    {
      title: 'Scandinavian Design',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/Home/featured/room.jpg',
    },
    {
      title: 'Japandi',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/Home/featured/minimalism.jpg',
    },
    {
      title: 'Modern Art',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      img: '/Home/featured/modern_art.jpg',
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: any) => console.log(swiper)}
      className="my-8 mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        300: {
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
      {cards.map((card, id) => (
        <SwiperSlide className="" key={id}>
          <article className="h-full w-full overflow-hidden rounded-lg">
            <div className="h-[220px] shadow-md bg-gray-300">
              <Image
                src={card.img}
                alt={card.title}
                width={200}
                height={200}
                className={styles.card_img}
              />
            </div>
            <aside className="p-2">
              <h4 className="text-xl my-2 font-semibold ">{card.title}</h4>
              <p>{card.text}</p>
            </aside>
          </article>
          <div className="my-12"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedCard;
