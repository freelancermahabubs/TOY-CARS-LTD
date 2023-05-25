import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
const Toys = ({ toys }) => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out",
      delay: 200,
    });
  }, []);
  const { user } = useContext(AuthContext);

  const { pictureUrl, rating, toyName, price, _id } = toys || {};
  const handleViewDetails = () => {
    if (!user?.email)
      toast.error("You have to log in first to view details", {
        position: toast.POSITION.TOP_RIGHT,
      });
  };
  return (
    <div
      data-aos="flip-right"
      className="card mb-5 mx-auto   w-[80%] h-[450px] bg-base-100 shadow-xl"
    >
      <figure>
        <img src={pictureUrl} alt="PictureUrl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="text-xl font-semibold">Name:</span> {toyName}
        </h2>
        <p className="text-xl">Price: ${price}</p>
        <div className="flex items-center mt-2.5 mb-5">
          <p className="flex  items-center text-xl gap-x-2">
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-yellow-500" />}
              fullSymbol={<FaStar />}
            />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 tex-xl rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Rating: {rating}
            </span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link
            onClick={handleViewDetails}
            to={`/singleToyDetails/${_id}`}
            className="btn btn-outline btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toys;
