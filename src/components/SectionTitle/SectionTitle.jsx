

// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading,subHeading}) => {
    return (
      <div className="md:w-4/12 mx-auto my-8 text-center">
        <p className="text-[#D99904] mb-2 text-xl ">--- {subHeading} ---</p>
        <h3 className="text-4xl border-t-4 uppercase border-b-4  ">{heading}</h3>
      </div>
    );
};

export default SectionTitle;