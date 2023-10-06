import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

function Root() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(console.log("Log out suceessfully"))
      .catch((error) => console.log(error.code));
  };

  return (
    <>
      {user ? (
        <>
          <span>{user.email}</span>
          <a onClick={handleLogOut} className="btn btn-secondary  mx-3">
            Sign Out
          </a>
          <Link to={"/orders"} className="btn btn-secondary  mx-3">
            Orders
          </Link>
        </>
      ) : (
        <>
          <Link to={"/login"} className="btn btn-secondary mx-3">
            Login
          </Link>
          <Link to={"/signup"} className="btn btn-secondary mx-3">
            Signup
          </Link>
        </>
      )}

      <Outlet></Outlet>
    </>
  );
}

export default Root;
