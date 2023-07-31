/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { useEffect, useRef } from "react";

const Navbar = () => {
  const dropdown = useRef();

  const handlenavClick = () => {
    if (dropdown.current.classList.contains("visuallyhidden")) {
      dropdown.current.classList.remove("hidden");
      setTimeout(function () {
        dropdown.current.classList.remove("visuallyhidden");
      }, 20);
    } else {
      dropdown.current.classList.add("visuallyhidden");

      dropdown.current.addEventListener(
        "transtionend",
        function () {
          dropdown.current.classList.add("hidden");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
    }
  };

  const handleOptions = () => {
    if (!dropdown.current.classList.contains("visuallyhidden")) {
      dropdown.current.classList.add("visuallyhidden");

      dropdown.current.addEventListener(
        "transtionend",
        function () {
          dropdown.current.classList.add("hidden");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
    }
  };

  return (
    <div className="flex flex-row  flex-auto relative z-1 ">
      <Link className=" fixed  p-7" to="/">
        {" "}
        <svg
          className="w-7 h-6 mt-2 inline z-2"
          preserveAspectRatio="xMidYMid meet"
          data-bbox="20.303 25.565 159.393 148.871"
          viewBox="20.303 25.565 159.393 148.871"
          height="200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
          data-type="color"
          role="img"
          aria-labelledby="comp-kk2o699z-svgtitle_comp-kk2o699z"
        >
          <defs>
            <style>#comp-kk2o699z svg [data-color="1"] </style>
          </defs>
          <title id="comp-kk2o699z-svgtitle_comp-kk2o699z">Homepage</title>
          <g>
            <path
              d="M179.398 97.035c-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0L88.06 83.006C76.12 77.633 61.196 84.2 59.107 97.035c-.299.895-.299 2.089-.299 3.283 0 .895 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283z"
              fill="#FD6262"
              data-color="1"
            ></path>
            <path
              d="M49.556 62.112l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.895.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.835-17.014-19.402-28.953-14.029l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864.895-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.013 19.402 28.953 14.029z"
              fill="#FD6262"
              data-color="1"
            ></path>
            <path
              d="M111.94 137.928l-12.537 5.671c-11.94 5.373-25.371 5.373-37.311 0l-12.537-5.671c-11.94-5.373-26.864 1.194-28.953 14.029-.299.895-.299 2.089-.299 3.283 0 .896 0 2.089.299 3.283 2.089 12.835 17.014 19.402 28.953 14.029l12.537-5.671c11.94-5.373 25.371-5.373 37.311 0l12.537 5.671c11.94 5.373 26.864-1.194 28.953-14.029.298-.896.298-2.089.298-3.283 0-.895 0-2.089-.298-3.283-2.089-12.836-17.014-19.402-28.953-14.029z"
              fill="#FD6262"
              data-color="1"
            ></path>
          </g>
        </svg>
      </Link>
      <Link to="/" className="fixed text-2xl z-2 inline mt-8 ml-16 ">
        Vista.io
      </Link>

      <button onClick={handlenavClick} className="fixed right-0 top-9">
        <svg
          className=" mb-10 w-12 h-17"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          fill="currentColor"
        >
          <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
        </svg>
      </button>

      <div
        className=" dropdown  hidden visuallyhidden mt-7 mr-12  "
        ref={dropdown}
      >
        <Link className="m-5" onClick={handleOptions}>
          <button className=" text-default  transition ease-in-out hover:text-red-300 duration-300">
            Solutions
          </button>
        </Link>
        <Link className="m-5" onClick={handleOptions}>
          <button className="  text-default  transition ease-in-out hover:text-red-300 duration-300">
            Vision
          </button>
        </Link>
        <Link className="m-5" onClick={handleOptions}>
          <button className="  text-default  transition ease-in-out hover:text-red-300 duration-300">
            Programs
          </button>
        </Link>
        <Link className="m-5" onClick={handleOptions}>
          <button className="  text-default transition ease-in-out hover:text-red-300 duration-300">
            Blog
          </button>
        </Link>
        <Link
          className="m-5 text-red-300 transition ease-in-out hover:text-red-100 duration-300"
          onClick={handleOptions}
        >
          <button className=" text-red-300 transition ease-in-out hover:text-red-100 duration-300">
            <img src="user.png" alt="" />
            Log In
          </button>
        </Link>
        <Link className="m-5" onClick={handleOptions}>
          <button className="  hood text-white p-2 rounded-md pl-3 pr-3 border-2 transition ease-in-out delay-15  hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 text-#141416 s hover:border-blue-400 duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

//transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
