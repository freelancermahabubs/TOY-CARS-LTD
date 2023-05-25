import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [navHide, setNavHide] = useState(true);
  const navItems = (
    <>
      <li>
        <Link className="text-red text-lg font-medium">Home</Link>
      </li>
      <li>
        <Link to="/allToys" className="text-red text-lg font-medium">
          All Toys
        </Link>
      </li>

      <li>
        <Link to="/blogs" className="text-red text-lg font-medium">
          Blogs
        </Link>
      </li>
      <li>
        <>
          {user?.email ? (
            <span className="lg:flex justify-center items-center gap-2">
              <span>
                <Link
                  to="/AddToys"
                  className="text-red text-lg sm:ml-4 md:ml-4 lg:ml-0 font-medium sm:mr-0 md:mr-0 lg:mr-2 "
                >
                  Add A Toy
                </Link>
              </span>
              <span>
                <Link
                  to="/myToys"
                  className="text-red text-lg sm:ml-4 md:ml-4 lg:ml-0 font-medium sm:mr-0 md:mr-0 lg:mr-2 "
                >
                  My Toys
                </Link>
              </span>
              <img
                title={user?.displayName}
                className="rounded-full mx-auto lg:mt-0 sm:mt-2 md:mt-2 w-14 cursor-pointer"
                src={user?.photoURL}
              />

              <button
                onClick={logOut}
                className="bg-yellow-500 lg:ml-0 sm:ml-6 md:ml-6 lg:mt-0 sm:mt-4 md:mt-4  text-slate-800 px-8 py-2 rounded-lg font-semibold  "
              >
                Log Out
              </button>
            </span>
          ) : (
            <Link to="/login">
              <button className="bg-yellow-500  text-slate-800 px-8 py-2 rounded-lg font-semibold ">
                Login
              </button>
            </Link>
          )}
        </>
      </li>
    </>
  );
  return (
    <header className="max-w-full px-3 md:px-0 md:w-10/12 mx-auto py-10">
      <nav className="flex gap-6 flex-col md:flex-row justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link>
            <img
              className="w-24 md:w-32 object-fill"
              src="https://i.ibb.co/nRkYhvM/Super-Toy-Cars-Logo-HD.png"
              alt="logo"
            />
          </Link>
          <Link to="/">
            <p className="font-semibold text-2xl ml-2 uppercase">
              Toy CARS LTD
            </p>
          </Link>

          <div className="flex gap-2 items-center md:hidden">
            {user && (
              <img
                title={user?.displayName}
                className="rounded-full w-14 lg:flex hidden cursor-pointer "
                src={user?.photoURL}
              />
            )}

            <button onClick={() => setNavHide(!navHide)} className="text-2xl">
              <Hamburger />
            </button>
          </div>
        </div>
        <div className="flex gap-6 flex-col md:flex-row justify-between items-center md:gap-12">
          <ul
            className={`flex flex-col px-11 md:px-0 py-6 md:py-0 md:backdrop-blur-none backdrop-blur-3xl lg:text-black sm:text-white md:flex-row duration-300 items-center h-screen md:h-auto z-40 md:bg-transparent rounded-md gap-5 absolute md:static md:gap-12 ${
              navHide ? "-left-96" : "left-0"
            }`}
          >
            {navItems}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
