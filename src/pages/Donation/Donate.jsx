import { NavLink } from "react-router-dom";

const Donate = ({ card }) => {
    const { title, category, category_bg_color, card_bg_color, picture, text_button_bg_color,price} = card ||{};

    const categoryStyle = {
        color: category_bg_color
    };
    const cardBgColor = {
        backgroundColor: card_bg_color
    };
    const textButtonBgColor = {
        backgroundColor: text_button_bg_color
        
};
const btnStyle = {
    backgroundColor: category_bg_color
}

    return (
        <div>
            <div style={cardBgColor} className="bg-base-200 flex items-center gap-2 w-[648px] h-[200px] mx-auto">
    <img src={picture}/>
    <div className=" space-y-3">
      <div style={textButtonBgColor } className="w-[87px] h-[25px] rounded-[4px] pl-2 pb-1"><h1 style={categoryStyle} className="card-title font-medium text-[14px]">{category}</h1></div>
      <p className="text-xl font-semibold">{title}</p>
      <p style={categoryStyle}>${price}</p>
      <NavLink to={`/donationdetails/${category}`}>
      <button style={btnStyle} className="btn text-white">View Details</button>
      </NavLink>
    </div>
  </div>
</div>
    );
};

export default Donate;