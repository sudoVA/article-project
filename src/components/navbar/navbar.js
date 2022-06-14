import { Link, useLocation } from "react-router-dom";
import { navbarItems } from "../../constants/constants";

export default function Navbar() {
  var currentUrl = useLocation();
  return (
    <>
      {navbarItems.map((item) => (
        <Link
          to={`/${item.toLowerCase()}`}
          className={`/${item.toLowerCase()}` === currentUrl ? "" : ""}
          key={`${item}`}
        >
          {item}
        </Link>
      ))}
    </>
  );
}
