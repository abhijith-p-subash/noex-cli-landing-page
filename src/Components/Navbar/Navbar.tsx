import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="store">Store</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
