import { useEffect } from "react";
import Photo1 from "../../../assets/gallery/photo1.jpg";
import Photo2 from "../../../assets/gallery/photo2.jpg";
import Photo3 from "../../../assets/gallery/photo3.jpg";
import Photo4 from "../../../assets/gallery/photo4.jpg";
import Photo5 from "../../../assets/gallery/photo5.jpg";
import Photo6 from "../../../assets/gallery/photo6.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 200,
    });
  }, []);
  return (
    <div className="mt-8 ">
      <h2 className="text-5xl text-center mb-8 font-bold header-text">
        Our Gallery
      </h2>
      <div className="container mx-auto px-5 py-2 lg:px-32 ">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div data-aos="flip-right" className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Photo1}
              />
            </div>
            <div data-aos="flip-right" className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Photo2}
              />
            </div>
            <div data-aos="flip-right" className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Photo3}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div data-aos="flip-right" className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Photo4}
              />
            </div>
            <div data-aos="flip-right" className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Photo5}
              />
            </div>
            <div data-aos="flip-right" className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Photo6}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
