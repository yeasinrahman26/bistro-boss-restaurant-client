import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";
import img from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-24">
      {/* Section Title */}
      <div>
        <SectionTitle heading={"Featured Item"} subHeading={"Check it Out"} />
      </div>

      {/* Content */}
      <div className="content-container md:flex gap-10 justify-center items-center px-20 p-12">
        {/* Image */}
        <div>
          <img
            src={img} // Replace with your image URL
            alt="Featured item"
          />
        </div>

        {/* Text */}
        <div className="space-y-2 text-lg">
          <p>March 20, 2023</p>
          <p>
            WHERE CAN I GET SOME? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error voluptate facere, deserunt dolores maiores
            quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn text-white btn-outline border-0 border-b-2">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
