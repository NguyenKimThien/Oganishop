import MainLayout from "../../layouts/MainLayout";
import SideBarSearch from "./sidebarSearch";
import SideBar from "../../components/sidebar";
import banner from "../../assets/img/breadcrumb.jpg";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../../components/search";
import ProductList from "./productList";
import listProduct from "../../data/product";
import { Link } from "react-router-dom";
import { useState } from "react";

const ShopPage = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const filteredProducts = listProduct.filter(product =>
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );
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
            </div>
          </div>
        </div>
      </section>
      <section className="breadcrumb-section set-bg">
        <img src={banner} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Organi Shop</h2>
                <div className="breadcrumb__option">
                  <Link to='/'>Home</Link>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <SideBarSearch onPriceChange={setPriceRange}/>
            </div>
            <div className="col-lg-9 col-md-7">
              <ProductList ProductList={filteredProducts}/>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default ShopPage;
