import { Link } from "react-router-dom";
import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";


const MenuCategory = ({items,title}) => {
    return (
      <div className="">
        <div className="flex flex-col  mb-10 justify-center items-center">
          <div className="grid mx-4 my-10 md:mx-0 md:grid-cols-2 gap-10">
            {items.map((item) => (
              <MenuItemCard key={item._id} item={item}></MenuItemCard>
            ))}
          </div>
          <Link to={`/order/${title}`}>
            <button className="btn text-black  uppercase bg-white btn-outline border-0 border-b-4 font-semibold">
              Order Your Favorite Now
            </button>
          </Link>
        </div>
      </div>
    );
};

export default MenuCategory;