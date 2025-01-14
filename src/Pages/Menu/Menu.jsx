import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import PopularMenu from "../Home/PopularMenu";
import menuImg from '../../assets/menu/banner3.jpg'
import menuImg1 from '../../assets/menu/pizza-bg.jpg'
import menuImg2 from '../../assets/menu/salad-bg.jpg'
import menuImg3 from '../../assets/menu/soup-bg.jpg'
import menuImg4 from '../../assets/menu/dessert-bg.jpeg'



const Menu = () => {
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
        <PopularMenu></PopularMenu>
        {/*  */}
        <Cover
          coverImg={menuImg1}
          header={"PIZZA"}
          paragraph={"Would you like to try a dish?"}
        ></Cover>
        <PopularMenu></PopularMenu>
        {/*  */}
        <Cover
          coverImg={menuImg2}
          header={"SALAd"}
          paragraph={"Would you like to try a dish?"}
        ></Cover>
        <PopularMenu></PopularMenu>
        {/*  */}
        <Cover
          coverImg={menuImg3}
          header={"SOUP"}
          paragraph={"Would you like to try a dish?"}
        ></Cover>
        <PopularMenu></PopularMenu>
        {/*  */}
        <Cover
          coverImg={menuImg4}
          header={"DESERT"}
          paragraph={"Would you like to try a dish?"}
        ></Cover>
        <PopularMenu></PopularMenu>
      </div>
    );
};

export default Menu;