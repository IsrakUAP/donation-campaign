import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Header/Banner/Banner";
import BannerStyle from "../../components/Header/BannerStyle/BannerStyle";

const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            
            <Banner></Banner>
            <BannerStyle></BannerStyle>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;