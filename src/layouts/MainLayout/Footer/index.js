import './style.scss'
import { FaHeart,FaShoppingBag,FaFacebook,FaTwitter,FaLinkedinIn,FaPinterestP,FaUser,FaEnvelope, FaPrint, FaArrowDown, FaArrowAltCircleDown, FaInstagram } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../assets/img/logo.png'
import payment from '../../../assets/img/payment-item.png'
const Footer = () => {
  return (
    <footer className="footer spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__about__logo">
                <a href="./index.html">
                  <img src={logo} alt="" />
                </a>
              </div>
              <ul>
                <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: hello@colorlib.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
            <div className="footer__widget">
              <h6>Useful Links</h6>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">About Our Shop</a>
                </li>
                <li>
                  <a href="#">Secure Shopping</a>
                </li>
                <li>
                  <a href="#">Delivery infomation</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Our Sitemap</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Who We Are</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Innovation</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
              <h6>Join Our Newsletter Now</h6>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <form action="#">
                <input type="text" placeholder="Enter your mail" />
                <button type="submit" className="site-btn">
                  Subscribe
                </button>
              </form>
              <div className="footer__widget__social">
                <a href="#">
                  <FaFacebook/>
                </a>
                <a href="#">
                 <FaInstagram/>
                </a>
                <a href="#">
                  <FaTwitter/>
                </a>
                <a href="#">
                  <FaPinterestP/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              <div className="footer__copyright__text">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <FaHeart/> by Thien Fontend
                </p>
              </div>
              <div className="footer__copyright__payment">
                <img src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
