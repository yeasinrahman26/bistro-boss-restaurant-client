import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import PopularMenu from "../Home/PopularMenu";
import menuImg from '../../assets/menu/banner3.jpg'
import menuImg1 from '../../assets/menu/pizza-bg.jpg'
import menuImg2 from '../../assets/menu/salad-bg.jpg'
import menuImg3 from '../../assets/menu/soup-bg.jpg'
import menuImg4 from '../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";



const Menu = () => {
  const [menu]=useMenu();
  const desserts=menu.filter(item=> item.category === "dessert") ;
  const pizza=menu.filter(item=> item.category === "pizza") ;
  const salad=menu.filter(item=> item.category === "salad") ;
  const soup=menu.filter(item=> item.category === "soup") ;
  const offered=menu.filter(item=> item.category === "offered") ;
  console.log(desserts);
    return (
      <div>
        <Helmet>
          <title>Bistro Boss | Menu </title>
        </Helmet>
        {/*  */}
        <Cover
          coverImg={menuImg}
          header={"OUR MENU"}
          paragraph={"Would you like to try a dish?"}
        ></Cover>
        <SectionTitle
          subHeading={"Don`t Miss "}
          heading={"Today`s Offer"}
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>

        {/*  */}
        <Cover
          coverImg={menuImg1}
          header={"PIZZA"}
          paragraph={"Would you like to try a dish?"}
        ></Cover>
        <MenuCategory items={pizza}></MenuCategory>

        {/*  */}
        <Cover
          coverImg={menuImg2}
          header={"SALAD"}
          paragraph={"Would you like to try a dish?"}
        ></Cover>
        <MenuCategory items={salad}></MenuCategory>
        {/*  */}
        <Cover
          coverImg={menuImg3}
          header={"SOUP"}
          paragraph={"Would you like to try a dish?"}
        ></Cover>
        <MenuCategory items={soup}></MenuCategory>

        {/*  */}
        <Cover
          coverImg={menuImg4}
          header={"DESERT"}
          paragraph={"Would you like to try a dish?"}
        ></Cover>
        <MenuCategory items={desserts}></MenuCategory>
      </div>
    );
};

export default Menu;