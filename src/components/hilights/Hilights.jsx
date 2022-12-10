import React, {useEffect, useState} from 'react'
import axios from 'axios'

import './hilights.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";

const client = axios.create({
  baseURL: "https://manga-reader-api.herokuapp.com/mangas/" 
});

function Hilights() {
  const [posts, setPosts] = useState([]);

   useEffect(() => {
      client.get('weekly').then((response) => {
         setPosts(response.data.weeklyTop);
      });
   }, []);

  return (
    <div>
        <Swiper navigation={true} 
          pagination={{clickable: true}}
          slidesPerView={1}
          loop={true} 
          autoplay={{delay: 5000, disableOnInteraction: false}}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper">
            {
              posts.map(({mangaName, imageSrc}) =>{
              return(
                <SwiperSlide>
                  <Link to="/mangas" className='link'>
                    <div className="back__image"/>
                    <img className='hilight__img' src={imageSrc} alt={mangaName} />
                    <h3 className='manga__title'>{mangaName}</h3>
                  </Link>
                </SwiperSlide>
                )
            })
          }
        </Swiper>
    </div>
  )
}

export default Hilights
