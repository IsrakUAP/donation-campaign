import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../../components/Cards/Cards';
import Banner from '../../components/Header/Banner/Banner';
import BannerStyle from '../../components/Header/BannerStyle/BannerStyle';


const Home = () => {
    const initialCards = useLoaderData();
    const [cards, setCards] = useState(initialCards);
    const [categoryFilter, setCategoryFilter] = useState('');
    const filterCards = (category) => {
        setCategoryFilter(category)
        if (!category) {
            setCards(initialCards);
        } else {
            const filtered = initialCards.filter((card) =>
                card.category.toLowerCase().includes(category.toLowerCase())
            );
            setCards(filtered);
        }
    };

    return (
        <div>
            <Banner filterCards={filterCards} />
            <BannerStyle></BannerStyle>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;