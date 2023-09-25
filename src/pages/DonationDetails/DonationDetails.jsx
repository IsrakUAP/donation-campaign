
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "./CardDetails";


const DonationDetails = () => {
    const[card,setCard]=useState([]);
    const {category} = useParams();
    const cards = useLoaderData();
    useEffect(()=>{
        const findCard = cards?.find(card=>card.category === category)
        setCard(findCard);

    },[category,cards])

    return (
        <div>
            <CardDetails card={card}></CardDetails>
        </div>
    );
};

export default DonationDetails;