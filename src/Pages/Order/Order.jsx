import Cover from "../Shared/Cover/Cover";
import img from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/UseMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
        <Helmet>
                  <title>Bistro Boss | Order </title>
                </Helmet>
      <Cover
        coverImg={img}
        header={"OUR SHOP"}
        paragraph={"Would you like to try a dish?"}
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <div className="grid  grid-col-1 md:grid-col-2 py-10 lg:grid-cols-3 gap-10">
            {salad.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-col-1 md:grid-col-2 py-10 lg:grid-cols-3 gap-10">
            {pizza.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-col-1 md:grid-col-2 py-10 lg:grid-cols-3 gap-10">
            {soup.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-col-1 md:grid-col-2 py-10 lg:grid-cols-3 gap-10">
            {desserts.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-col-1 md:grid-col-2 py-10 lg:grid-cols-3 gap-10">
            {drinks.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
