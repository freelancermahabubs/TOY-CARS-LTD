import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const GetUpto = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 200,
    });
  }, []);
  return (
    <div data-aos="zoom-in" className="mt-5 mb-8">
      <div className="p-6 py-12 bg-violet-400 rounded-md w-[64%] mx-auto dark:text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">Toy Cars Ltd</span>
            </div>
            <button
              rel="noreferrer noopener"
              className="px-5 btn btn-outline hover:text-rose-950 mt-4 lg:mt-0 py-3 rounded-md border block glass text-black dark:border-gray-400"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUpto;
