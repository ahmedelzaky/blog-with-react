import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1>the Dojo blog</h1>
      <div className="links">
        <Link to="/">home</Link>
        <Link to="/create">new blog</Link>
      </div>
    </header>
  );
};

export default Navbar;
