import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import useTitle from "../../useTitle";
const ToysDetails = () => {
  useTitle("ToysDetails");
  const toyDetails = useLoaderData();

  return (
    <div className="px-12 my-12">
      <div className="card lg:card-side bg-base-100 w-full h-96 shadow-xl">
        <figure>
          <img
            className="min-h-full w-full"
            src={toyDetails?.pictureUrl}
            alt="PictureUrl"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold">
            <span className="text-xl font-bold pr-2">Toy Name:</span>
            {toyDetails?.toyName}
          </h2>
          <p className="text-xl font-semibold ">
            <span className="text-xl font-bold pr-2">Seller Name:</span>
            {toyDetails?.name}
          </p>
          <p className="text-xl font-semibold ">
            <span className="text-xl font-bold pr-2">Seller Email:</span>
            {toyDetails?.postedBy}
          </p>
          <p className="text-xl  font-semibold ">
            <span className="text-xl font-bold pr-2">Price:</span>$
            {toyDetails?.price}
          </p>
          <p className="text-xl  font-semibold ">
            <span className="text-xl font-bold pr-2">Quantity:</span>
            {toyDetails?.quantity}
          </p>
          <div className="flex items-center mt-2.5 mb-5">
            <p className="flex  items-center text-xl gap-x-2">
              <Rating
                placeholderRating={toyDetails?.rating}
                readonly
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar className="text-yellow-500" />}
                fullSymbol={<FaStar />}
              />
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 tex-xl rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {toyDetails?.rating}
              </span>
            </p>
          </div>
          <p className="text-xl  font-semibold ">
            <span className="text-xl font-bold pr-2">Description:</span>
            {toyDetails?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
