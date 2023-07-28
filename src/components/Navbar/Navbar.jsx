import Element from "../Navbar/Element";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar(props) {
  const data = [
    {
      title: "Solution",
      leadsto: "/",
    },
    {
      title: "Vision",
      leadsto: "/",
    },
    {
      title: "Programs",
      leadsto: "/",
    },
    {
      title: "Blog",
      leadsto: "/",
    },
    {
      title: "Login",
      leadsto: "/",
    },
    {
      title: "Get Started",
      leadsto: "/",
    },
  ];
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    if (toggle) {
      document.getElementById("menu").setAttribute("class", "absolute shadow-2xl bg-[#FE6261] top-[50px] p-6 rounded right-0")
    } else {
      document.getElementById("menu").setAttribute("class", "hidden")
    }
    setToggle(!toggle);
    // console.log(toggle)
  }

  return (
    <div className="flex justify-between w-full">
      <Link className="text-xl" to="/">
        WIX
      </Link>
      <div className="gap-6 lg:flex md:flex hidden flex-none">
        {data.map((el, ind) => (
          <Element key={ind} {...el} />
        ))}
      </div>
      <div className="md:hidden flex lg:hidden relative">
        <button onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#949494"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
        <div className="hidden"id="menu">
          <ul>
            {data.map((el, ind) => (
              <Element key={ind} {...el} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
