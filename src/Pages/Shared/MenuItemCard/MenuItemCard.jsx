
// eslint-disable-next-line react/prop-types
const MenuItemCard = ({item}) => {
    // eslint-disable-next-line react/prop-types
    const { image, name, recipe,price} = item;
    return (
      <div className="flex justify-center  gap-4">
        <img
          src={image}
          className="rounded-full w-32 h-32 object-cover rounded-tl-none "
          alt=""
        />
        <div>
          <h3 className="uppercase text-[#151515] text-xl font-medium">
            {name}
          </h3>
          <h3 className="text-[#737373] text-lg ">{recipe}</h3>
        </div>
        <h2 className="text-[#BB8506] text-xl font-semibold ">{price}$</h2>
      </div>
    );
};

export default MenuItemCard;