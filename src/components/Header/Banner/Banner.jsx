import React, { useState } from 'react';

const Banner = ({ filterCards }) => {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        filterCards(searchText);
    };

    return (
        <div className="z-40 h-[600px] max-w-lg mx-auto pt-[200px] text-center">
            <p className="font-bold text-[40px] mb-4">I Grow By Helping People In Need</p>
            <form className="flex justify-center" onSubmit={handleSubmit}>
                <input
                    className="w-[470px] h-[50px] px-4 border-[1px]" type="text" name="" id="" placeholder="Search here..." value={searchText} onChange={(e) => setSearchText(e.target.value)}
                />
                <input className="bg-[#FF444A] w-[110px] h-[50px] rounded-r-lg cursor-pointer" type="submit" value="Search" />
            </form>
        </div>
    );
};

export default Banner;
