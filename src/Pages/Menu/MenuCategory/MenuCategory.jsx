import MenuItemCard from "../../Shared/MenuItemCard/MenuItemCard";


const MenuCategory = ({items}) => {
    return (
      <div>
        <div className="grid mx-4 my-10 md:mx-0 md:grid-cols-2 gap-10">
          {items.map((item) => (
            <MenuItemCard key={item._id} item={item}></MenuItemCard>
          ))}
        </div>
      </div>
    );
};

export default MenuCategory;