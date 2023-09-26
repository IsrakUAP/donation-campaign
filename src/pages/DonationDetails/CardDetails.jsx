import React from 'react';
import swal from 'sweetalert';

const CardDetails = ({card}) => {
 const {description,image,price,title,category_bg_color} = card ||{};
 const categoryStyle = {
    backgroundColor: category_bg_color
};
 const handleAddToDonation = ()=>{
    const donationArray = [];
    const donationItems = JSON.parse(localStorage.getItem('donation'));
     if(!donationItems){
        donationArray.push(card)
        localStorage.setItem('donation',JSON.stringify(donationArray))
        swal("Donation Added", "", "success");
     }
    else{
        donationArray.push(...donationItems,card)
        localStorage.setItem('donation',JSON.stringify(donationArray))
        swal("Donation Added", "", "success");
        }
 }
 
    return (
        <div>
            <div className=" max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl grid grid-cols-1 bg-base-200 mt-8">
 
    <img src={image} className=" w-[100%] h-[700px] shadow-2xl" />
    <div className=' -mt-[135px] p-9 bg-[#0B0B0B80]'>
      
      <button onClick={handleAddToDonation} className="py-4 px-6 rounded-[4px] text-[20px] font-semibold text-white" style={categoryStyle}>Donate ${price}</button>
    </div>
    <div className='mt-7 p-3'>
    <h1 className="text-[40px] font-bold">{title}</h1>
      <p className="py-6 text-[16px]">{description}</p>
      </div>
  </div>
</div>
    );
};

export default CardDetails;