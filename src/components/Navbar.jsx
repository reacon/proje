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
    <div className="flex flex-row  flex-auto relative z-1">
      <Link className="  p-7" to="/">
        {" "}
        <button className="">
          {" "}
          <img
            className="w-12"
            src="https://img.freepik.com/premium-vector/letter-cc-l…ign-abstract-letter-cc-logo-design_219523-125.jpg"
            alt=""
          ></img>
        </button>
      </Link>

      <button onClick={handlenavClick} className="fixed right-0 top-10">
        button1
      </button>

      <div
        className=" dropdown  hidden visuallyhidden mt-8 mr-12  "
        ref={dropdown}
      >
        <Link className="m-5" onClick={handleOptions}>
          <button>solutions</button>
        </Link>
        <Link className="m-5" onClick={handleOptions}>
          <button>vision</button>
        </Link>
        <Link className="m-5" onClick={handleOptions}>
          <button>programs</button>
        </Link>
        <Link className="m-5" onClick={handleOptions}>
          <button>blog</button>
        </Link>
        <Link className="m-5" onClick={handleOptions}>
          <button>log in</button>
        </Link>
        <Link className="m-5" onClick={handleOptions}>
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
