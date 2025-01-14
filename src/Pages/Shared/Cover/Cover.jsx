import { Parallax,  } from "react-parallax";

// eslint-disable-next-line react/prop-types
const Cover = ({ coverImg, header, paragraph }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={coverImg}
      bgImageAlt="the dog"
      strength={300}
    >
      <div
        className="hero h-[600px]">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content lg:w-[1000px] lg:h-[350px] px-20 py-10  text-neutral-content bg-[#15151599] text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">{header}</h1>
            <p className="mb-5 text-xl">{paragraph}</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
