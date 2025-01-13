import About from "./About";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <About></About>
           <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;