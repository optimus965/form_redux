import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="views">
        <h1>Views</h1>
      </Link>
      <Link to="form">
        <h1>Form</h1>
      </Link>
      <Outlet />
    </div>
  );
}
export default Header;
