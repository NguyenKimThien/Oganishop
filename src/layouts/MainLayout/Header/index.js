import {
  FaHeart,
  FaShoppingBag,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaUser,
  FaEnvelope,
  FaPrint,
  FaArrowDown,
  FaArrowAltCircleDown,
  FaBars,
} from "react-icons/fa";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../assets/img/logo.png";
import imgLanguage from "../../../assets/img/language.png";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { toast } from "react-toastify";
import { formatCurrency } from "../../../utils/formatCurrency";
const Header = () => {
  const [username, setUsername] = useState("");
  const [onMenu, setOnMenu] = useState(false);
  const location = useLocation();
  const { cartItems, favoriteItems, total } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isLogin = username === "";
  const navigate = useNavigate();
  const handleClickCart = () => {
    if (isLogin) {
      toast.warning("You need to login to continue using", {
        autoClose: 2000,
        onClose: () => {
          navigate("/login");
        },
      });
    } else {
      navigate("/cart");
    }
  };
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setUsername(userEmail);
    }
  }, []);
  const openMenu = () => {
    setOnMenu((onMenu) => !onMenu);
    document.body.classList.add("over_hid");
  };
  return (
    <div>
      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}

      <div
        className={`humberger__menu__overlay ${onMenu ? "active" : ""}`}
        onClick={openMenu}
      ></div>
      <div
        className={`humberger__menu__wrapper ${
          onMenu ? "show__humberger__menu__wrapper" : ""
        }`}
      >
        <div className="humberger__menu__logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <Link to="/favorite">
                <FaHeart /> <span>{favoriteItems.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <FaShoppingBag /> <span>{cartItems.length}</span>
              </Link>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>{formatCurrency(total)}</span>
          </div>
        </div>
        <div className="humberger__menu__widget">
          <div className="header__top__right__language">
            <img src={imgLanguage} alt="" />
            <div>English</div>
            <ul>
              <li>
                <a href="#">Spanis</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
            </ul>
          </div>
          <div className="header__top__right__auth">
            <Link to="/login">
              {" "}
              <FaUser />
              {username === "" ? "Login" : username}
            </Link>
          </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={location.pathname === "/shop" ? "active" : ""}>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className={location.pathname === "/blog" ? "active" : ""}>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="header__top__right__social">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaPinterestP />
          </a>
        </div>
        <div className="humberger__menu__contact">
          <ul>
            <li>
              <FaEnvelope /> hello@colorlib.com
            </li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>

      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <FaEnvelope /> hello@colorlib.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#">
                      <FaFacebook />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                    <a href="#">
                      <FaPinterestP />
                    </a>
                  </div>
                  <div className="header__top__right__language">
                    <img src={imgLanguage} alt="" />
                    <div>English</div>
                    <FaArrowDown />
                    <ul>
                      <li>
                        <a href="#">Spanis</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <Link to="/login">
                      <FaUser />
                      {username === "" ? "Login" : username}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="./index.html">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className={location.pathname === "/shop" ? "active" : ""}>
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li className={location.pathname === "/blog" ? "active" : ""}>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <button>
                      <Link to="/favorite">
                        <FaHeart /> <span>{favoriteItems.length}</span>
                      </Link>
                    </button>
                  </li>
                  <li>
                    <button onClick={handleClickCart}>
                      <FaShoppingBag /> <span>{totalItems}</span>
                    </button>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open" onClick={openMenu}>
            <FaBars />
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
