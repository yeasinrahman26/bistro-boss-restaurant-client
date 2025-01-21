import useAuth from "../../hooks/useAuth";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, image, name, recipe, price } = item;
  const { user } = useAuth();
  const email = user.email;
  const axiosSecure = useAxiosSecure();
  const [,refetch]=useCart();

  const handleAddCart = () => {
    const cartItem = {
      menuId: _id,
      email: email,
      name,
      image,
      price,
    };

    axiosSecure.post("carts", cartItem).then((res) => {
      console.log(res.data);
      // alert("added to the cart");
      // refetch 
      refetch();
    });
  };

  return (
    <div className="card card-compact  bg-[#F3F3F3]  shadow-2xl">
      <figure>
        <img src={image} alt={name} className=" p-3" />
      </figure>
      <p className="text-white absolute right-7 top-6 py-2 px-4  bg-slate-900">
        ${price}
      </p>
      <div className="card-body flex  flex-col items-center text-center space-y-2">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddCart}
            className="btn text-[#BB8506]  hover:text-[#BB8506] uppercase bg-white btn-outline border-0 border-b-4 font-semibold"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
