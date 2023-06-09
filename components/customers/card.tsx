import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from 'classnames';
import styles from './customer.module.css';

const CustomerCard = () => {
  const cards = [1, 2, 3, 4, 5, 6];
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
      // onSwiper={(swiper: any) => console.log(swiper)}
      className="my-8"
    >
      {reviews.map((review, id) => (
        <SwiperSlide className="py-[100px]" key={id}>
          <article
            className={
              activeIndex == id
                ? cls(styles.card, 'bg-white text-black')
                : cls(styles.card, 'text-white')
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
