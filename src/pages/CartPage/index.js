import MainLayout from "../../layouts/MainLayout";
import banner from "../../assets/img/breadcrumb.jpg";
import SideBar from "../../components/sidebar";
import Search from "../../components/search";
import './style.scss';
import { Link } from "react-router-dom";
const CartPage = () => {
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
                <h2>Shopping cart</h2>
                <div className="breadcrumb__option">
                  <Link to="/">Home</Link>
                  <span>Shopping cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shoping-cart spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="shoping__cart__item">
                                        <img src="img/cart/cart-1.jpg" alt=""/>
                                        <h5>Vegetable’s Package</h5>
                                    </td>
                                    <td className="shoping__cart__price">
                                        $55.00
                                    </td>
                                    <td className="shoping__cart__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shoping__cart__total">
                                        $110.00
                                    </td>
                                    <td className="shoping__cart__item__close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <li>Subtotal <span>$454.98</span></li>
                            <li>Total <span>$454.98</span></li>
                        </ul>
                        <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </MainLayout>
  );
};

export default CartPage;
