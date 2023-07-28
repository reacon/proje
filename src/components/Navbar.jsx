import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";

const Navbar = () => {
  const [display, setDisplay] = useState("none");

  const handleClick = () => {
    if (display == "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  return (
    <div className="flex flex-row relative z-0">
      <Link className="flex-auto border-2 p-7" to="/">
        {" "}
        WIX
      </Link>
      <button onClick={handleClick} className="absolute right-0 top-7">
        button1
      </button>

      <div
        className=" absolute z-1 right-5 mr-7 mt-5"
        style={{ display: display }}
      >
        <Link className="m-5">
          <button>solutions</button>
        </Link>
        <Link className="m-5">
          <button>vision</button>
        </Link>
        <Link className="m-5">
          <button>programs</button>
        </Link>
        <Link className="m-5">
          <button>blog</button>
        </Link>
        <Link className="m-5">
          <button>log in</button>
        </Link>
        <Link className="m-5">
          <button className="   text-white p-2 rounded-md pl-3 pr-3 transition ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

//transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
