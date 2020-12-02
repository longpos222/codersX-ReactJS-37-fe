import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div
            className="nav-wrapper white"
            style={{
              paddingLeft: "20px",
            }}
          >
            <Link to={state ? "/" : "/signin"} className="brand-logo">
              Instagram
            </Link>
            <ul id="nav-mobile" className="right">
              {!state && (
                <>
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                    <Link to="/signin">Sign in</Link>
                  </li>
                </>
              )}
              {state && (
                <>
                  <li>
                    <Link to="/create">Create post</Link>
                  </li>
                  <li>
                    <Link to="/profile">{state.name}'s profile</Link>
                  </li>
                  <li>
                    <div>
                      {/* <i class="material-icons">favorite_border</i> */}
                      <span
                        class="badge orange new"
                        style={{ marginTop: "5px", zIndex: "22" }}
                      >
                        4
                      </span>
                      <i class="material-icons red-text">favorite</i>
                    </div>
                  </li>
                  <li>
                    <button
                      className="btn white-text red"
                      style={{
                        marginLeft: "20px",
                        marginRight: "20px",
                      }}
                      onClick={() => {
                        localStorage.clear();
                        dispatch({ type: "CLEAR", payload: null });
                        history.push("/signin");
                      }}
                    >
                      Log Out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
