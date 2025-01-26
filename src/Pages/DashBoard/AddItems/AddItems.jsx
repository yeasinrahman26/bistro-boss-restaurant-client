import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure=useAxiosSecure();



  const onSubmit = async (data) => {
    // console.log(data);
    // image upload to imageBB and then get url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        price: parseFloat(data.price),
        category: data.category,
        image: res.data.data.display_url,
      };
      const menuRes=await axiosSecure.post('/menu',menuItem);
      console.log(menuRes.data);
      if(menuRes.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        subHeading={"What's New"}
        heading={"Add an Item"}
      ></SectionTitle>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-2xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Recipe Name */}
          <div>
            <label className="block font-medium text-lg mb-2" htmlFor="name">
              Recipe Name*
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              placeholder="Enter recipe name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Category */}
          <div>
            <label
              className="block font-medium text-lg mb-2"
              htmlFor="category"
            >
              Category*
            </label>
            <select
              {...register("category", { required: true })}
              id="category"
              className="select select-bordered w-full font-medium text-lg"
            >
              <option disabled selected>
                Select a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium text-lg mb-2" htmlFor="price">
              Price*
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              id="price"
              placeholder="Enter price"
              className="input input-bordered w-full"
            />
          </div>

          {/* Recipe Details */}
          <div>
            <label
              className="block font-medium text-lg mb-2"
              htmlFor="recipeDetails"
            >
              Recipe Details*
            </label>
            <textarea
              {...register("recipe", { required: true })}
              id="recipeDetails"
              placeholder="Enter recipe details"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* File Upload */}
          <div>
            <label className="block font-medium text-lg mb-2" htmlFor="image">
              Upload Image
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              id="image"
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-full">
              Add Item 🍴
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
