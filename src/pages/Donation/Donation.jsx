import { useEffect, useState } from "react";
import Donate from "./Donate";


const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if (donationItems) {
            setDonations(donationItems)
        }
        else {
            setNofound("No Data Found")
        }
    }, [])
    console.log(donations);
    return (
        <div>
            {noFound ? <p className=" h-[80vh] flex items-center justify-center">{noFound}</p> : <div>
                <div className=" grid grid-cols-2 justify-center items-center gap-4">
                    {donations.slice(0, dataLength).map((card, idx) => <Donate key={idx} card={card}></Donate>)}
                </div>
            </div>}
            <div className={donations.length > 3 ? 'visible' : 'hidden'}>
                <div className="mt-2 flex items-center justify-center">
                    <div className={dataLength === donations.length && 'hidden'}>
                        <button onClick={() => setDataLength(donations.length)} className="btn text-white bg-[#009444]">See All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;