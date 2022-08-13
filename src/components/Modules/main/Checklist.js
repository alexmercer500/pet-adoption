import React from 'react'
import './checklist.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Checklist = () => {
    return (
        <div className='adoption-checklist text-center z-10'>
            <h1 className='text-3xl p-10'>Are you Planning to Adopt a Pet</h1>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    580: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide> <section className='checklist-section p-4'>
                    <h1 className='text-xl mb-4'>Checklist for New Adopters</h1>
                    <p>Are you Eligible for Adoption of new Pet?,
                        What are your Requirements. Which One you want to Adopt, Help us
                        make this transition smooth as Possible.
                    </p>
                    <button>Learn More</button>
                </section></SwiperSlide>
                <SwiperSlide><section className='checklist-section p-4'>
                    <h1 className='text-xl mb-4'>Guidelines for Adoptation</h1>
                    <p>Due to new COVID-19 guidelines, we have few changes in Policy.
                        Information about Vaccination and Proper Health management about Pets is provided in our
                        Blog. Contact us regarding more information.
                    </p>
                    <button>Learn More</button>
                </section></SwiperSlide>
                <SwiperSlide><section className='checklist-section p-4'>
                    <h1 className='text-xl mb-4'>FAQ Regarding Pet Adoptation </h1>
                    <p>Do you have any Question regarding our policy and procedure,
                        Reach out to us. We are here to give every possible answer of your question.
                    </p>
                    <button>Learn More</button>
                </section></SwiperSlide>
            </Swiper>



        </div>
    )
}

export default Checklist