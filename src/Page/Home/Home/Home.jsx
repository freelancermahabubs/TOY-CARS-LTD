import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Banner1 from "../../../assets/banners.jpg";
import Banner2 from "../../../assets/banner.jpg";
import Banner3 from "../../../assets/banner3.jpg";
import Car1 from "../../../assets/car1.jpg";
import Car2 from "../../../assets/car3.jpg";
import Car3 from "../../../assets/images.jpg";
import Gallery from "../Gallery/Gallery ";
import ShopByCategory from "../ShopBycategory/ShopBycategory";
import useTitle from "../../../useTitle";
import Review from "../Review/Review";
import Analytics from "../Analytics/Analytics";

import GetUpto from "../Getupto/Getupto";
import ContactUs from "../ContactUs/ContactUs";
const Home = () => {
  useTitle("Home");
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `linear-gradient(140deg, #181818 0%, rgba(24, 24, 24, 0.822917) 24.48%, rgba(24, 24, 24, 0) 100%), url(${Banner1})`,
              backgroundRepeat: "no-repeat",
              height: "80vh",
              width: "700",
              backgroundSize: "cover",
            }}
          >
            <div className="hero h-[95%] mb-5 ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={Car1}
                  className="lg:max-w-sm  hover:border-2 hover:border-x-cyan-500 cursor-pointer rounded-lg shadow-2xl"
                />
                <div className="lg:pl-0 pl-7">
                  <div className="lg:w-[24%] w-28 md:w-[24%]">
                    <h1 className="lg:text-2xl bg-red-500  p-2 rounded font-bold uppercase text-white">
                      Buy 3 get <br /> 5% Discount
                    </h1>
                  </div>
                  <p className="lg:py-6 text-white lg:w-[64%] lg:text-xl">
                    Toy cars and vehicles provide a fun source of entertainment,
                    while building motor, cognitive, and social skills at the
                    same time. They give children an opportunity to use their
                    imagination and create their own adventures - as
                  </p>
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `linear-gradient(140deg, #181818 0%, rgba(24, 24, 24, 0.822917) 24.48%, rgba(24, 24, 24, 0) 100%), url(${Banner2})`,
              backgroundRepeat: "no-repeat",
              height: "80vh",
              width: "700",
              backgroundSize: "cover",
            }}
          >
            <div className="hero h-[95%] ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={Car2}
                  className="lg:max-w-sm hover:border-2 hover:border-x-cyan-500 cursor-pointer rounded-lg shadow-2xl"
                />
                <div className="lg:pl-0 sm:pl-5">
                  <div className="lg:w-[24%] w-28 md:w-[24%]">
                    <h1 className="lg:text-2xl bg-red-500  p-2 rounded font-bold uppercase text-white">
                      Buy 3 get <br /> 5% Discount
                    </h1>
                  </div>
                  <p className="lg:py-6 text-white lg:w-[64%] lg:text-xl">
                    Toys and real-life objects like cars are very sensorily
                    engaging. Kids can interact with toy cars, trucks, etc.
                    through spinning their wheels, watching them move in a
                    variety of directions, or hearing the sounds they make.
                  </p>
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `linear-gradient(140deg, #181818 0%, rgba(24, 24, 24, 0.822917) 24.48%, rgba(24, 24, 24, 0) 100%), url(${Banner3})`,
              backgroundRepeat: "no-repeat",
              height: "80vh",
              width: "700",
              backgroundSize: "cover",
            }}
          >
            <div className="hero h-[95%] ">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={Car3}
                  className="lg:max-w-sm  hover:border-2 hover:border-x-cyan-500 cursor-pointer rounded-lg shadow-2xl"
                />
                <div className="lg:pl-0 pl-7">
                  <div className="lg:w-[24%] w-28 md:w-[24%]">
                    <h1 className="lg:text-2xl bg-red-500  p-2 rounded font-bold uppercase text-white">
                      Buy 3 get <br /> 5% Discount
                    </h1>
                  </div>
                  <p className="lg:py-6 text-white lg:w-[64%] lg:text-xl">
                    Educational toys will usually enhance a childs learning
                    through developing their logic and problem solving skills,
                    encouraging communication skills, refining motor skills and
                    nurturing their creativity.
                  </p>
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Gallery />
      <ShopByCategory />
      <Review />
      <Analytics />
      <GetUpto />
      <ContactUs />
    </>
  );
};

export default Home;
