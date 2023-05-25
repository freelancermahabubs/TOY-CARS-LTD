import { Link } from "react-router-dom";
import useTitle from "../../useTitle";

const AllToysTable = ({ toys }) => {
  useTitle("AllToysTable");
  return (
    <tr>
      <td>{toys?.name}</td>
      <td>{toys?.toyName}</td>
      <td>{toys?.subcategory}</td>
      <td>${toys?.price}</td>
      <td className="text-center">{toys?.quantity}</td>
      <td>
        <Link className="btn btn-info" to={`/details/${toys?._id}`}>
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default AllToysTable;
