import { Helmet } from "react-helmet-async";
import About from "./About";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home </title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
