'use client'
import React from 'react'
import Slider from "react-slick";
import Slide from './slide';

const HeroSection = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        arrows: false
    }

    const slideData = [
        {
            id: 0,
            img: '/assets/concert1.jpg',
            title: "",
            mainTitle: "",
            Price: "",
        },
        {
            id: 1,
            img: '/assets/concert2.jpg',
            title: "",
            mainTitle: "",
            Price: "",
        },
        {
            id: 2,
            img: '/assets/concert3.jpg',
            title: "",
            mainTitle: "",
            Price: "",
        },


    ]



    return (
        <div>
            <div className='pt-6 lg:pt-0 bg-gray-300 relative'>
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            mainTitle={item.mainTitle}
                            price={item.Price}

                        />
                    ))}
                </Slider>
                {/* <div className="bg-gray-300 text-blackish text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-black hover:text-white hover:transition duration-400 absolute top-[60%] left-[45%]">
                    Shop Now
                </div> */}
            </div>
        </div>
    )
}


export default HeroSection