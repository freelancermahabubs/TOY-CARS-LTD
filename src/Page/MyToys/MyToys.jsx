import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useTitle from "../../useTitle";
const MyToys = () => {
  useTitle("MyToys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [selectedOption, setSelectedOption] = useState("asc");

  useEffect(() => {
    let sortValue = "desc";
    if (selectedOption === "asc") {
      sortValue = "asc";
    }

    const fetchData = async () => {
      console.log(sortValue);
      try {
        const res = await fetch(
          `https://toy-cars-ltd-server.vercel.app/myToys/${user?.email}?sort=${sortValue}`
        );
        const data = await res.json();
        setMyToys(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user, selectedOption]);

  const handleSortOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-cars-ltd-server.vercel.app/deleteToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
              const remaining = myToys.filter((toys) => toys._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-center font-bold text-5xl mt-5">My Toys</h1>
      <div className="text-end px-12">
        <select
          value={selectedOption}
          onChange={handleSortOptionChange}
          className="select select-bordered w-full max-w-xs "
        >
          <option disabled selected>
            Sort By High Price and Low Price!
          </option>
          <option value="desc">Descending </option>
          <option value="asc">Ascending </option>
        </select>
      </div>
      <div className="overflow-x-auto px-12 mt-8 ">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Picture URL</th>
              <th>Toy Name</th>
              <th>Seller Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th className="text-center">Available Quantity</th>
              <th className="text-center">Rating</th>
              <th>Detail Description</th>
              <th>Update Action</th>
              <th>Delete Action </th>
            </tr>
          </thead>
          <tbody>
            {myToys?.map((myToy, index) => {
              return (
                <tr key={myToy._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded">
                        <img src={myToy?.pictureUrl} alt="pictureUrl" />
                      </div>
                    </div>
                  </td>
                  <td>{myToy?.toyName}</td>
                  <td>{myToy?.name}</td>
                  <td>{myToy?.subcategory}</td>
                  <td>${myToy?.price}</td>
                  <td className="text-center">{myToy?.quantity}</td>
                  <td className="text-center">
                    <div className="flex items-center mt-2.5 mb-5">
                      <p className="flex  items-center text-xl gap-x-2">
                        <Rating
                          placeholderRating={myToy?.rating}
                          readonly
                          emptySymbol={<FaRegStar />}
                          placeholderSymbol={
                            <FaStar className="text-yellow-500" />
                          }
                          fullSymbol={<FaStar />}
                        />
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 tex-xl rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                          {myToy?.rating}
                        </span>
                      </p>
                    </div>
                  </td>
                  <td>{myToy?.description}</td>
                  <td>
                    <Link
                      className="btn btn-outline btn-secondary"
                      to={`/updateToy/${myToy._id}`}
                    >
                      Update Toy
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(myToy._id)}
                      className="btn btn-error text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
