import { Link } from "react-router-dom";

export default function Element(props) {
  return (
    <div className="pb-4 pr-10 lg:p-0 md:p-0 whitespace-nowrap">
      <Link className="text-xl text-black lg:text-inherit md:text-inherit" to={props.leadsto}>{props.title}</Link>
    </div>
  );
}
