import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import banner from "../../assets/img/breadcrumb.jpg";
import MainLayout from "../../layouts/MainLayout";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import listProduct from "../../data/product";
import { FaFacebook, FaHeart, FaInstagram, FaPinterest, FaStar, FaStarHalfAlt, FaTwitter } from "react-icons/fa";
import { formatCurrency } from "../../utils/formatCurrency";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
const DetailPage = () => {
  const { id } = useParams();
  const product = listProduct.find((item) => item.id === parseInt(id));
  const [quanity,setQuanity] = useState(1);
  const navigate = useNavigate();
  const redQuanity = () => {
    setQuanity(quanity => quanity - 1);
  }
  const incQuanity = () => {
    setQuanity(quanity => quanity + 1);
  }
  const { addToCart,isLogin } = useCart();
  
  const handleAddToCart = () => {
    if(isLogin){
      addToCart(product, quanity);
      toast.success("Add product successfully !");
    }else {
      localStorage.setItem('idToDetail',id)
      toast.warning("You need to login to continue using !", {
        autoClose : 2000,
        onClose : () => {
          navigate('/login');
        }
      })
    }
  };
  return (
    <MainLayout>
      <section className="breadcrumb-section set-bg">
        <img src={banner} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Vegetable’s Package</h2>
                <div className="breadcrumb__option">
                  <Link to= "/">Home</Link>
                  <Link to= "/shop">Vegetables</Link>
                  <span>Vegetable’s Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={product.src}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>Vetgetable’s Package</h3>
                <div className="product__details__rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <span>5</span>
                </div>
                <div className="product__details__price">{formatCurrency(product.price)}</div>
                <p>{product.description}</p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <span className={quanity === 1?"disabled-span":""} onClick={redQuanity}>-</span>
                      <input type="text" value={quanity} readOnly />
                      <span onClick={incQuanity}>+</span>
                    </div>
                  </div>
                </div>
                <a href="#" className="primary-btn btn-add" onClick={handleAddToCart}>
                  ADD TO CARD
                </a>
                <a href="#" className="heart-icon">
                  <FaHeart/>
                </a>
                <ul>
                  <li>
                    <b>Availability</b> <span>In Stock</span>
                  </li>
                  <li>
                    <b>Shipping</b>{" "}
                    <span>
                      01 day shipping. <samp>Free pickup today</samp>
                    </span>
                  </li>
                  <li>
                    <b>Weight</b> <span>{product.weight}</span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div className="share">
                      <a href="#">
                        <FaFacebook />
                      </a>
                      <a href="#">
                        <FaTwitter />
                      </a>
                      <a href="#">
                        <FaInstagram />
                      </a>
                      <a href="#">
                        <FaPinterest />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-selected="false"
                    >
                      Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-selected="false"
                    >
                      Reviews <span>(1)</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                      <p>
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies
                        ligula sed magna dictum porta. Cras ultricies ligula sed
                        magna dictum porta. Sed porttitor lectus nibh. Mauris
                        blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Sed porttitor lectus nibh. Vestibulum ac
                        diam sit amet quam vehicula elementum sed sit amet dui.
                        Proin eget tortor risus.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                      <p>
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies
                        ligula sed magna dictum porta. Cras ultricies ligula sed
                        magna dictum porta. Sed porttitor lectus nibh. Mauris
                        blandit aliquet elit, eget tincidunt nibh pulvinar a.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DetailPage;
