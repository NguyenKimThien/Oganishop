import Search from "../../components/search";
import SideBar from "../../components/sidebar";
import MainLayout from "../../layouts/MainLayout";
import banner1 from '../../assets/img/banner/banner-1.jpg'
import banner2 from '../../assets/img/banner/banner-2.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../assets/img/hero/banner.jpg";
import CategorySlider from "./slide";
import Feature from "./feature";
import Blog from "./blog";
const HomePage = () => {
  return (
    <MainLayout>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideBar />
            </div>
            <div className="col-lg-9">
              <Search />
              <div className="hero__item set-bg" data-setbg={banner}>
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="categories">
        <div className="container">
          <div className="row">
            <CategorySlider />
          </div>
        </div>
      </section>
      <Feature/>
      <div className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src={banner1} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner__pic">
                        <img src={banner2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Blog/>
    </MainLayout>
  );
};
export default HomePage;
