import Image from 'next/image';
import React from 'react';

const MarketCard = ({ item }) => {
    return (
        <div className='w-[420px] md:w-[750px] lg:w-[420px] shadow-md mb-4'>
            <div className='h-[200px] w-[420px] md:w-[750px] lg:w-[420px] overflow-hidden '>
                <Image src={item.img} alt='sunsetPicture'  layout="responsive" width={420} height={200} objectFit='contain'/> 
            </div>
            <div className='p-4'>
                <p className='text-lg font-bold my-2'>{item.title}</p>
                <p className='text-sm  my-2'>{item.description}</p>
            </div>
        </div>
    );
};

export default MarketCard;