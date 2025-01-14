// eslint-disable-next-line react/prop-types
const Cover = ({coverImg, header,paragraph}) => {
  return (
    <div
      className="hero h-[600px]  "
      style={{
        backgroundImage: `url("${coverImg}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content lg:w-[1000px] lg:h-[350px] px-20 py-10  text-neutral-content bg-[#15151599] text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">{header}</h1>
          <p className="mb-5 text-xl">{paragraph}</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Cover;
