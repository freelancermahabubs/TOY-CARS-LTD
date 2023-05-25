import { Link, useLoaderData } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Banner from "../../assets/mt-1710_home_bg01.jpg";
import useTitle from "../../useTitle";
const SingleToyDetails = () => {
  useTitle("SingleToyDetails");
  const singleDetails = useLoaderData();
  console.log(singleDetails);
  return (
    <div className="mb-8">
      <div className="flex items-center mb-8 justify-center">
        <BsArrowLeft className="text-3xl" />
        <Link
          to="/"
          className="btn text-3xl font-semibold header-text text-white text-center "
        >
          Back to home
        </Link>
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: ` url(${Banner})`,
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "700",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h2 className="bg-amber-300 absolute  lg:top-[20%]  lg:left-[38%] skew-x-12 py-5 lg:text-5xl font-bold px-12">
            HOLIDAY
          </h2>
          <h1 className="text-center uppercase lg:text-6xl font-extrabold absolute top-[40%] lg:left-[38%] mt-3 pl-5">
            Big Sale
          </h1>
          <h2 className="bg-teal-400 absolute lg:top-[60%]  lg:left-[34%]  skew-x-12 py-5 lg:text-5xl font-bold px-12">
            Up To 35% OFF
          </h2>
        </div>
      </div>
      <div className="max-w-lg p-4 mx-auto mt-8 shadow-md bg-red-50 rounded-md dark:text-gray-100">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={singleDetails?.pictureUrl}
              alt="PictureUrl"
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-rose-950">
                Seller Name: {singleDetails?.name}
              </h3>
            </a>
            <p className="leading-snug text-black">
              <span className="text-xl font-semibold mr-2">Quantity:</span>
              {singleDetails?.quantity}
            </p>
            <p className="leading-snug text-black">
              <span className="text-xl font-semibold mr-2">Description:</span>
              {singleDetails?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
