import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Player } from "@lottiefiles/react-lottie-player";
import UpdateAnimation from "../../assets/update.json";
import useTitle from "../../useTitle";
const UpdateToy = () => {
  useTitle("UpdateToy");
  const updateToys = useLoaderData();

  const { _id, price, description, quantity } = updateToys;

  const handleToyUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      price: parseFloat(price),
      quantity,
      description,
    };
    console.log(updatedToy);
    fetch(`https://toy-cars-ltd-server.vercel.app/updateToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <>
      <h1 className="header-text font-semibold text-center mt-5 text-6xl">
        Update Product
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 px-24 my-12 lg:grid-cols-2 ">
        <form
          onSubmit={handleToyUpdate}
          className="bg-slate-200 shadow-lg  p-5 rounded-md"
        >
          <div className="">
            <div className="flex gap-2">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-xl">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  defaultValue={price}
                  name="price"
                />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-xl">Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered input-secondary w-full max-w-xs"
                  defaultValue={quantity}
                  name="quantity"
                />
              </div>
            </div>
          </div>
          <label className="label mt-3">
            <span className="label-text text-xl"> Detail description</span>
          </label>
          <textarea
            placeholder="Description"
            className="textarea  textarea-bordered textarea-lg w-full 
          max-w-xs"
            type="text"
            name="description"
            defaultValue={description}
          ></textarea>

          <div className="text-center mt-4 ">
            <input
              type="submit"
              className="text-gray-900 header-text cursor-pointer text-xl bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg px-5 py-2.5 text-center dark:focus:ring-[#F7BE38]/50 mr-2  mb-2"
              value="Update Product"
            />
          </div>
        </form>
        <div className="w-[70%] mx-auto">
          <Player autoplay loop src={UpdateAnimation}></Player>
        </div>
      </div>
    </>
  );
};

export default UpdateToy;
