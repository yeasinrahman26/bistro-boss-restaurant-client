
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'


const Category = () => {
    return (
      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={50}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-20"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className="text-4xl text-white text-center -mt-20 uppercase">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <h3 className="text-4xl text-white text-center -mt-20 uppercase">
              Pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h3 className="text-4xl text-white text-center -mt-20 uppercase">
              Soup
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <h3 className="text-4xl text-white text-center -mt-20 uppercase">
              Desert
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <h3 className="text-4xl text-white text-center -mt-20 uppercase">
              Salad
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Category;