import React from 'react'
import Image from 'next/image';
import { url } from 'inspector';

interface propsType {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
    return (
        <div style={{
            backgroundImage: `url(${img})`
        }}
            className='relative h-[600px] bg-black/20  my-4 bg-center bg-cover rounded-[50px] mx-[20px] flex justify-center items-center overflow-hidden'>
            <div className='absolute z-1 flex flex-col justify-center items-center  '>
            </div>
            <div className='w-full h-full absolute z-0 bg-black/20'>
            </div>
        </div>
    )
}

export default Slide