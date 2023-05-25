import { useEffect, useState } from "react";
import Toys from "../../Toys/Toys";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const ShopByCategory = () => {
  const [allToys, setAllToys] = useState([]);
  const [activeTab, setActiveTab] = useState("sportsCar");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://toy-cars-ltd-server.vercel.app/allToy/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setAllToys(result);
        setIsLoading(false);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <h1 className=" text-center text-5xl font-bold mt-5 header-text p-5">
        Shop By Category
      </h1>

      <div className="flex justify-center gap-3 mt-5 ">
        <div
          onClick={() => handleTabClick("sportsCar")}
          className={` p-3  rounded-md cursor-pointer lg:text-xl font-semibold${
            activeTab == "sportsCar" ? " bg-red-600 text-white" : "bg-blue-600 "
          }`}
        >
          Sports Car
        </div>
        <div
          onClick={() => handleTabClick("truck")}
          className={` rounded-md p-3  lg:px-8 cursor-pointer lg:text-xl font-semibold ${
            activeTab == "truck"
              ? " bg-red-600 text-white"
              : "bg-blue-600 text-white"
          }`}
        >
          Truck
        </div>
        <div
          onClick={() => handleTabClick("regularCar")}
          className={` rounded-md cursor-pointer p-3  lg:text-xl font-semibold ${
            activeTab == "regularCar"
              ? " bg-red-600 text-white"
              : "bg-blue-600 text-white"
          }`}
        >
          Regular Car
        </div>
      </div>

      <div className="grid  mb-12   md:px-12 lg:px-12  gap-3  overflow-hidden  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  mt-8 ">
        {allToys?.map((toys) => (
          <Toys key={toys?._id} toys={toys}></Toys>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
