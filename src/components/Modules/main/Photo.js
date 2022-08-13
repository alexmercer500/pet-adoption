import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './photo.css'
import allData from '../../Global/Data'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Photo = () => {

    const [getDogData] = useState(allData.dogs);

    return (
        <div className='Photo-section my-10 z-10'>
            <h1 className='mt-10 text-4xl py-6'>Meet Few of Our Proud Boys</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    580: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                }}
                navigation
                pagination={{ clickable: true }}

            >
                <SwiperSlide><figure><img src={getDogData[0].photo} alt='img' />
                    <div className='know-more flex justify-evenly'> <figcaption>{getDogData[0].name}</figcaption>
                        <button>Know More</button></div>
                </figure></SwiperSlide>

                <SwiperSlide><figure><img src={getDogData[1].photo} alt='img' />
                    <div className='know-more flex justify-evenly'> <figcaption>{getDogData[1].name}</figcaption>
                        <button>Know More</button></div>
                </figure></SwiperSlide>

                <SwiperSlide><figure><img src={getDogData[4].photo} alt='img' />
                    <div className='know-more flex justify-evenly'> <figcaption>{getDogData[4].name}</figcaption>
                        <button>Know More</button></div>
                </figure></SwiperSlide>

                <SwiperSlide><figure><img src={getDogData[6].photo} alt='img' />
                    <div className='know-more flex justify-evenly'> <figcaption>{getDogData[6].name}</figcaption>
                        <button>Know More</button></div>
                </figure></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Photo