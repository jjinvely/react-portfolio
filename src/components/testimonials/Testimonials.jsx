import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data=[
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: '버튼 하나에도 의미를 담는다는 가치관을 가진 친구라 웹퍼블리셔로서의 애티튜드가 멋지다고 생각해'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: '에러메세지를 해결할 때 희열감을 느낀다는거 보면 너랑 잘 맞는거 같아'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: '낙방하더라도 포기하지 않고 계속 해나가는 너의 도전에 응원해 넌 내가 인정하는 신입이야!'
  }
]
function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from people in office</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, review}, index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials