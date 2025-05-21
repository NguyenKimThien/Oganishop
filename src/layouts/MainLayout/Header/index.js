import { FaHeart,FaShoppingBag,FaFacebook,FaTwitter,FaLinkedinIn,FaPinterestP,FaUser,FaEnvelope, FaPrint, FaArrowDown, FaArrowAltCircleDown, FaBars } from "react-icons/fa";
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/img/logo.png'
import imgLanguage from '../../../assets/img/language.png'
import { useState } from "react";
import { RxTriangleRight } from "react-icons/rx";

const Header = () => {
  const [onMenu,setOnMenu] = useState(false);
  const [onMenuDropDown , setOnMenuDropDown] = useState(false);
  
  const setMenuDropDown = () => {
       setOnMenuDropDown(onMenuDropDown => !onMenuDropDown);
  }
  const openMenu = () => {
    setOnMenu(onMenu => !onMenu);
    document.body.classList.add("over_hid");
  }
  return (
    <div>
      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}

      <div className={`humberger__menu__overlay ${onMenu? "active" : ""}`} onClick={openMenu}></div>
      <div className={`humberger__menu__wrapper ${onMenu ? "show__humberger__menu__wrapper" : ""}`}>
        <div className="humberger__menu__logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <FaHeart/> <span>1</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaShoppingBag/> <span>3</span>
              </a>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>$150.00</span>
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
            <a href="#">
              <FaUser/> Login
            </a>
          </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            <li className="active">
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./shop-grid.html">Shop</a>
            </li>
            <li style={{paddingBottom : onMenuDropDown?'0px':'8px'}}>            
              <a href="#" onClick={setMenuDropDown}>Pages <RxTriangleRight/></a>
              <ul className={`header__menu__dropdown ${onMenuDropDown? "active" : ""}`}>
                <li>
                  <a href="./shop-details.html">Shop Details</a>
                </li>
                <li>
                  <a href="./shoping-cart.html">Shoping Cart</a>
                </li>
                <li>
                  <a href="./checkout.html">Check Out</a>
                </li>
                <li>
                  <a href="./blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./blog.html">Blog</a>
            </li>
            <li>
              <a href="./contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="header__top__right__social">
          <a href="#">
            <FaFacebook/>
          </a>
          <a href="#">
            <FaTwitter/>
          </a>
          <a href="#">
            <FaLinkedinIn/>
          </a>
          <a href="#">
            <FaPinterestP/>
          </a>
        </div>
        <div className="humberger__menu__contact">
          <ul>
            <li>
              <FaEnvelope/> hello@colorlib.com
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
                      <FaEnvelope/> hello@colorlib.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#">
                      <FaFacebook/>
                    </a>
                    <a href="#">
                      <FaTwitter/>
                    </a>
                    <a href="#">
                      <FaLinkedinIn/>
                    </a>
                    <a href="#">
                      <FaPinterestP/>
                    </a>
                  </div>
                  <div className="header__top__right__language">
                    <img src={imgLanguage} alt="" />
                    <div>English</div>
                    <FaArrowDown/>
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
                    <a href="#">
                      <FaUser/> Login
                    </a>
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
                  <li className="active">
                    <a href="./index.html">Home</a>
                  </li>
                  <li>
                    <a href="./shop-grid.html">Shop</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="header__menu__dropdown">
                      <li>
                        <a href="./shop-details.html">Shop Details</a>
                      </li>
                      <li>
                        <a href="./shoping-cart.html">Shoping Cart</a>
                      </li>
                      <li>
                        <a href="./checkout.html">Check Out</a>
                      </li>
                      <li>
                        <a href="./blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <a href="#">
                      <FaHeart/> <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaShoppingBag/> <span>3</span>
                    </a>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open" onClick={openMenu}>
           <FaBars/>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
