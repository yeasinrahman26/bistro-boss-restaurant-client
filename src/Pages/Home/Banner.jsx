import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from '../../assets/Banner/01.jpg'
import banner2 from '../../assets/Banner/02.jpg'
import banner3 from '../../assets/Banner/03.png'
import banner4 from '../../assets/Banner/04.jpg'
import banner5 from '../../assets/Banner/05.png'
import banner6 from '../../assets/Banner/06.png'

const Banner = () => {
  return (
    <Carousel autoPlay='true' infiniteLoop="true">
      <div>
        <img src={banner1} />
        
      </div>
      <div>
        <img src={banner2} />
      
      </div>
      <div>
        <img src={banner3} />
       
      </div>
      <div>
        <img src={banner4} />
      
      </div>
      <div>
        <img src={banner5} />
       
      </div>
      <div>
        <img src={banner6} />
        
      </div>
    </Carousel>
  );
};

export default Banner;
