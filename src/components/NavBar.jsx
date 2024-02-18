import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div>
        <div>
          <Link to="/">Go to home page</Link>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log in</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
