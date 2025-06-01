import MainLayout from "../../layouts/MainLayout";
import banner from "../../assets/img/breadcrumb.jpg";
import SideBar from "../../components/sidebar";
import Search from "../../components/search";
import './style.scss';
import { formatCurrency } from "../../utils/formatCurrency";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  // Tính tổng tiền
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                                {cartItems.length === 0 ? (
                                  <tr>
                                    <td colSpan="5">
                                      <p>Giỏ hàng trống</p>
                                      <Link to="/shop" className="primary-btn">
                                        TIẾP TỤC MUA SẮM
                                      </Link>
                                    </td>
                                  </tr>
                                ) : (
                                  cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="shoping__cart__item">
                                            <img src={item.src} alt={item.name}/>
                                            <h5>{item.name}</h5>
                                        </td>
                                        <td className="shoping__cart__price">
                                            {formatCurrency(item.price)}
                                        </td>
                                        <td className="shoping__cart__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <span 
                                                      className={item.quantity === 1 ? "disabled" : ""}
                                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                      -
                                                    </span>
                                                    <input type="text" value={item.quantity} readOnly/>
                                                    <span onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                      +
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="shoping__cart__total">
                                            {formatCurrency(item.price * item.quantity)}
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span onClick={() => removeFromCart(item.id)}>×</span>
                                        </td>
                                    </tr>
                                  ))
                                )}
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
                            <li>Total <span>{formatCurrency(total)}</span></li>
                        </ul>
                        <Link to="/checkout" className="primary-btn">
                          PROCEED TO CHECKOUT
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </MainLayout>
  );
};

export default CartPage;
