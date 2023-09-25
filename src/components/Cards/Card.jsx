

const Card = ({ card }) => {
    const { title, category, category_bg_color, card_bg_color, picture, text_button_bg_color } = card;
    const categoryStyle = {
        color: category_bg_color
    };
    const cardBgColor = {
        backgroundColor: card_bg_color
    };
    const textButtonBgColor = {
        backgroundColor: text_button_bg_color
        
}
return (
    <div>
        <div style={cardBgColor} className="card shadow-xl">
            <figure><img src={picture} /></figure>
            <div className="card-body">
            <div style={textButtonBgColor} className="w-[87px] h-[25px] rounded-[4px] pl-2 pb-1"> <h2 style={categoryStyle} className="card-title font-medium text-[14px]">{category}</h2></div>
            <p className="text-[20px] font-semibold" style={categoryStyle}>{title}</p>
            </div>
            
        </div>

    </div>

);
};

export default Card;