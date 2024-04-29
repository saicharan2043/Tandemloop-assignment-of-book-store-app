import { IoSearch } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { CgShoppingBag } from "react-icons/cg";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import Cookies from "js-cookie";

import "./index.css";
import BookContext from "../context";

const NavBar = (props) => {
  const { changeSearchText } = props;

  const clickLogOut = () => {
    Cookies.remove("jwt_token");
    const { history } = props;
    history.replace("/login");
  };

  return (
    <BookContext.Consumer>
      {(value) => {
        const { bookCartList, isDrakModeTrue, clickThemBtn } = value;
        return (
          <div
            className={`navbar-container ${
              isDrakModeTrue && "bg-color-og-dark-mode"
            }`}
          >
            <h1 className={`logo-text ${isDrakModeTrue && "dark-mode-color"}`}>
              BOOKSHELF
            </h1>
            <div className="input-container">
              <IoSearch className="search-icon" />
              <input
                type="search"
                placeholder="Search your book here"
                className="search-input"
                onChange={(e) => changeSearchText(e.target.value)}
              />
            </div>
            <div className="logout-container">
              {isDrakModeTrue ? (
                <MdOutlineLightMode
                  className={`them-and-cart-icon ${
                    isDrakModeTrue && "dark-mode-color"
                  }`}
                  onClick={() => clickThemBtn()}
                />
              ) : (
                <MdDarkMode
                  className={`them-and-cart-icon ${
                    isDrakModeTrue && "dark-mode-color"
                  }`}
                  onClick={() => clickThemBtn()}
                />
              )}

              <CgShoppingBag
                className={`them-and-cart-icon ${
                  isDrakModeTrue && "dark-mode-color"
                }`}
              />
              <div
                className={`container-of-cart ${isDrakModeTrue && "white-bg"}`}
              >
                <p>{bookCartList.length}</p>
              </div>
              <button
                className={`log-out-btn ${isDrakModeTrue && "white-bg"}`}
                onClick={clickLogOut}
              >
                Logout
              </button>
            </div>
          </div>
        );
      }}
    </BookContext.Consumer>
  );
};

export default withRouter(NavBar);
