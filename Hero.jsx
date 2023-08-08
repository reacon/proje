import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <div className=" cool mt-36 ml-14 mb-72">
        <div>
          <h1 className="text-7xl  pt-5 w-1/2 mt-11 mb-14 -ml-16">
            The New Standard in Data Analysis
          </h1>
          <p className="text-3xl pb-10 mb-10 w-1/3 -ml-16">
            Use Data to Get a 360-Degree View of Your Business
          </p>
          <Link to="/">
            <button className="text-lg text-gray-700  rounded-md p-3 pr-6 pl-6 bg-red-300">
              Learn more
            </button>
          </Link>
        </div>
      </div>

      <div className=" cool1 mt-36 ml-14 mb-72">
        <div className="hero">
          <h1 className=" herotext1 text-7xl  ">
            The New Standard in Data Analysis
          </h1>
          <p className="herotext2 text-3xl ">
            Use Data to Get a 360-Degree View of Your Business
          </p>
          <Link to="/">
            <button className="text-lg text-gray-700 -ml-48 rounded-md p-3 pr-6 pl-6 bg-red-300">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
