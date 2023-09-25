import React from 'react';

const CardDetails = ({card}) => {
 const {description,image,price,title} = card ||{};
    return (
        <div>
            <div className="max-w-screen-xl grid grid-cols-1 bg-base-200 mt-8">
 
    <img src={image} className=" w-[100%] h-[700px] shadow-2xl" />
    <div className=' -mt-14 p-9 bg-[#0B0B0B80]'>
      
      <button className="py-4 px-6 rounded-[4px] text-[20px] font-semibold text-white  bg-[#FF444A]">Donate ${price}</button>
    </div>
    <div className='mt-7'>
    <h1 className="text-[40px] font-bold">{title}</h1>
      <p className="py-6 text-[16px]">{description}</p>
      </div>
  </div>
</div>
    );
};

export default CardDetails;