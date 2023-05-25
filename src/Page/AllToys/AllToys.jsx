import { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";
import useTitle from "../../useTitle";

const AllToys = () => {
  useTitle("AllToys");
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [viewAllToys, setViewAllToys] = useState(false);
  useEffect(() => {
    fetch("https://toy-cars-ltd-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleViewAllToys = () => {
    setViewAllToys(true);
  };
  const handleSearch = () => {
    fetch(`https://toy-cars-ltd-server.vercel.app/searchByToy/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllToys(data);
      });
  };
  const AllToysData = viewAllToys ? allToys : allToys.slice(0, 20);

  return (
    <div>
      <div>
        <h2 className="text-center text-5xl mt-8 font-bold">All Toys</h2>
        <div className="mt-8 mx-auto text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Your Toy"
            className="input input-bordered input-success w-full max-w-xs"
          />
          <button className="btn btn-secondary ml-3" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="overflow-x-auto px-12 mt-8">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th className="text-center">Available Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {AllToysData.map((toys) => (
                <AllToysTable key={toys._id} toys={toys} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-4">
          {!viewAllToys && (
            <button
              onClick={handleViewAllToys}
              className="btn btn-secondary text-xl w-46  bg-orange-500 text-white hover:bg-black-500 hover:text-white font-semibold  mb-5"
            >
              View All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
