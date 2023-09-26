import React from 'react';
import ChartPie from './ChartPie';

const Statistics = () => {
    const priceFromLocalStorage = JSON.parse(localStorage.getItem('price') || '0');
  const cardBgColorFromLocalStorage = localStorage.getItem('card_bg_color') || 'green';

  return (
    <div>
      
      <ChartPie price={priceFromLocalStorage} cardBgColor={cardBgColorFromLocalStorage} />
      
    </div>
  );
};

export default Statistics;
