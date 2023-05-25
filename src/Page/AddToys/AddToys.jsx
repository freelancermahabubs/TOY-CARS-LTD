import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Player } from "@lottiefiles/react-lottie-player";
import AnimationLottie from "../../assets/add.json";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../useTitle";
const AddToys = () => {
  useTitle("AddToys");
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.price = parseFloat(data.price);
    fetch("https://toy-cars-ltd-server.vercel.app/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    console.log(data);
  };

  return (
    <div className="px-20 my-12 ">
      <h2 className="text-center text-5xl font-bold mb-8 header-text">
        Add Your Toys
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="flex gap-2">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-xl">Picture URL</span>
                </label>
                <input
                  className="input input-bordered input-info mb-2 w-full max-w-xs"
                  {...register("pictureUrl")}
                  placeholder="Picture  URL"
                  type="url"
                  required
                />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-xl">Toy Name</span>
                </label>
                <input
                  className="input input-bordered  input-info mb-2 w-full max-w-xs"
                  {...register("toyName")}
                  placeholder="Toy Name"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-xl">Seller Name</span>
                </label>
                <input
                  className="input input-bordered  input-info mb-2 w-full max-w-xs"
                  value={user?.displayName}
                  {...register("name")}
                  placeholder="name"
                  type="text"
                />
              </div>

              <div className="w-full">
                <label className="label">
                  <span className="label-text text-xl">Seller email</span>
                </label>
                <input
                  className="input input-bordered input-info w-full max-w-xs"
                  value={user?.email}
                  {...register("postedBy")}
                  placeholder="your email"
                  type="email"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-xl">Price</span>
                </label>
                <input
                  className="input input-bordered mb-2 input-info w-full max-w-xs"
                  {...register("price", { required: true })}
                  placeholder="Price"
                  type="number"
                  required
                />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-xl">Rating</span>
                </label>
                <input
                  className="input input-bordered  input-info w-full max-w-xs"
                  {...register("rating", { required: true })}
                  placeholder="Rating"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-xl">Sub-category</span>
                </label>
                <select
                  className="input input-bordered mb-2 input-info w-full max-w-xs"
                  {...register("subcategory")}
                >
                  <option disabled selected>
                    Sub-category
                  </option>
                  <option value="sportsCar">Sports Car</option>
                  <option value="truck">Truck</option>
                  <option value="regularCar">Regular Car</option>
                </select>
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-xl">Quantity</span>
                </label>
                <input
                  className="input input-bordered  input-info w-full max-w-xs"
                  {...register("quantity")}
                  placeholder="Quantity"
                  type="number"
                  required
                />
              </div>
            </div>
            <label className="label">
              <span className="label-text text-xl"> Detail description</span>
            </label>

            <textarea
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              {...register("description")}
              placeholder="Description"
              required
            ></textarea>
            <input
              className="submit-btn ml-4 btn btn-active btn-secondary"
              value="Add a Toy"
              type="submit"
            />
          </form>
        </div>
        <div className="w-[70%] mx-auto">
          <Player autoplay loop src={AnimationLottie}></Player>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
