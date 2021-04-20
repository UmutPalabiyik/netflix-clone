import { useState, useEffect } from "react";
import { AiOutlineGift } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { IoMdNotifications } from "react-icons/io";
import "./Navbar.scss";

const Navbar = () => {
  const [scroll, setScroll] = useState("");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll("black-bg");
      } else {
        setScroll("");
      }
    });
  }, []);

  return (
    <div className={`main-header ${scroll}`}>
      <div className="primary-nav-list-wrapper">
        <div className="header-logo">
          <a href="/">
            <img src="../../assets/netflix_logo.png" alt="img" />
          </a>
        </div>
        <ul className="primary-nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">TV Shows</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">Latest</a>
          </li>
          <li>
            <a href="/">My List</a>
          </li>
        </ul>
      </div>
      <div className="second-nav-list-wrapper">
        <ul className="second-nav-list">
          <li>
            <a href="/">
              <ImSearch color={"#e5e5e5"} size={"1.3rem"} />
            </a>
          </li>
          <li>
            <a href="/">
              <span>KIDS</span>
            </a>
          </li>
          <li>
            <a href="/">
              <AiOutlineGift color={"#e5e5e5"} size={"1.5rem"} />
            </a>
          </li>
          <li>
            <a href="/">
              <IoMdNotifications color={"#e5e5e5"} size={"1.5rem"} />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="../../assets/netflix-user.png" alt="img" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
