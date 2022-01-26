import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/userAction";
import { signOut } from "next-auth/client";

const Header = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const handleLogOut = () => {
    signOut();
  };

  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <div className="navbar-brand">
            <Link href="/">
              <a>
                <img
                  style={{ cursor: "pointer" }}
                  src="/images/bookit_logo.png"
                  alt="BookIT"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center">
          {user ? (
            <div className="ml-4 dropdown d-list">
              <a
                className="btn dropdown-toggle mr-4"
                id="dropdownMenubutton"
                data-toggle="dropdown"
                area-haspopup="true"
                area-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user.name}</span>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link href="/booking/me">
                  <a className="dropdown-item">Bookings</a>
                </Link>
                <Link href="/me/update">
                  <a className="dropdown-item">Update</a>
                </Link>
                <Link href="/">
                  <a className="dropdown-item" onClick={handleLogOut}>
                    Logout
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link href="/login">
                <a className="btn btn-danger px-4 text-white login-header-btn float-right">
                  Login
                </a>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
