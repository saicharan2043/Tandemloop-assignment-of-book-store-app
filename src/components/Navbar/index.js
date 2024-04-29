import { IoSearch } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { CgShoppingBag } from "react-icons/cg";

import "./index.css";

const NavBar = (props) => {
  const { changeSearchText } = props;
  return (
    <div className="navbar-container">
      <h1 className="logo-text">BOOKSHELF</h1>
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
        <MdDarkMode className="them-and-cart-icon" />
        <CgShoppingBag className="them-and-cart-icon" />
        <div className="container-of-cart">
          <p>1</p>
        </div>
        <button className="log-out-btn">Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
