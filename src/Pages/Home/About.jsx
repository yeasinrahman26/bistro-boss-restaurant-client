import chef from "../../assets/home/chef-service.jpg";

const About = () => {
  return (
    <div
      className="h-[572px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${chef})` }}
    >
      <div className="bg-white p-10 md:mx-52 text-center text-black rounded-md shadow-lg">
        <h1 className="text-4xl mb-5 font-semibold">Bistro Boss</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default About;
