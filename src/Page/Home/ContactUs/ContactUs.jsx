import { useEffect } from "react";
import Banners from "../../../assets/gallery/banners.jpg";
import ContactUss from "../../../assets/gallery/best-contact-us-pages-2.png";

import AOS from "aos";
import "aos/dist/aos.css";
const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 200,
    });
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-8 header-text">
        Contact Us
      </h1>
      <p className="text-xl font-bold mb-5 text-center">
        We value your feedback and are always happy to assist you. If you have
        any questions, comments, or suggestions, <br /> please don not hesitate
        to reach out to us. Here are the various ways you can contact us.
      </p>
      <div
        data-aos="zoom-in"
        style={{
          backgroundImage: `linear-gradient(140deg, #181818 0%, rgba(24, 24, 24, 0.822917) 24.48%, rgba(24, 24, 24, 0) 100%), url(${Banners})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "700",
          backgroundSize: "cover",
        }}
      >
        <div className="grid max-w-screen-xl sm:mb-24 lg:mb-0 md:mb-12  grid-cols-1 gap-5 px-8 sm:-mt-5 lg:-mt-0 lg:py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-100">
          <div className="flex flex-col justify-between">
            <div className="space-y-2 lg:mt-8">
              <h2 className="text-4xl font-bold  lg:text-5xl text-white">
                Lets talk!
              </h2>
              <div>
                <p className="text-white text-xl">
                  I apologize, but as an AI language model, I don t have
                  real-time access to specific contact information for..
                </p>
              </div>
              <img src={ContactUss} alt="ContactUss" className=" rounded-md" />
            </div>
          </div>
          <div className="lg:mt-8 ">
            <form className="space-y-2  ng-untouched ng-pristine ng-valid">
              <div>
                <label
                  htmlFor="name"
                  className="text-2xl text-white font-semibold"
                >
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full p-3 rounded "
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-2xl text-white  font-semibold"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-3 rounded "
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-2xl font-semibold text-white "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Send Message"
                  rows="3"
                  className="w-full p-3 rounded "
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full  btn btn-secondary text-2xl text-white  font-semibold tracking-wide uppercase rounded dark:bg-violet-400 "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
