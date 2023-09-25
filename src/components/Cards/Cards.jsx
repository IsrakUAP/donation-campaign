import Card from "./Card";


const Cards = ({cards}) => {
    console.log(cards);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {
            cards?.map((card,idx)=><Card key={idx} card={card}></Card> )
         }
        </div>
    );
};

export default Cards;