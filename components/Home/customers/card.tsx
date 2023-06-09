import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from 'classnames';
import styles from './customer.module.css';
import { Pagination } from 'swiper';

const CustomerCard = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const reviews = [
    {
      name: 'Joan Mathew',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      rating: 4,
      img: '',
    },
    {
      name: 'JAnderson McDonals',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      rating: 3,
      img: '',
    },
    {
      name: 'Angela Rose',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptate enim illo dolorem amet in ducimus dolor sitrepudiandae adipisci eligendi.',
      rating: 4,
      img: '',
    },
    {
      name: 'JAnderson McDonals',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      rating: 3,
      img: '',
    },
    {
      name: 'JAnderson McDonals',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim illo dolorem amet in ducimus dolor sit repudiandae adipisci eligendi.',
      rating: 3,
      img: '',
    },
  ];
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={(swiper: any) => setActiveIndex(swiper.activeIndex + 1)}
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
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className="my-8"
    >
      {reviews.map((review, id) => (
        <SwiperSlide className="py-[100px]" key={id}>
          <article
            className={
              activeIndex == id
                ? cls(
                    styles.card,
                    'md:bg-white md:text-black',
                    'bg-white text-black'
                  )
                : cls(
                    styles.card,
                    'md:text-black md:bg-transparent',
                    'bg-white text-black'
                  )
            }
          >
            <div className={cls(styles.card_img_div)}></div>
            <aside className={cls(styles.card_body)}>
              <p className="my-10">{review.text}</p>

              <h4 className={cls(styles.card_header)}>{review.name}</h4>
            </aside>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomerCard;
