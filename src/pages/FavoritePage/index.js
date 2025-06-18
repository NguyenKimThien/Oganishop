import MainLayout from "../../layouts/MainLayout";
import banner from "../../assets/img/breadcrumb.jpg";
import SideBar from "../../components/sidebar";
import Search from "../../components/search";
import './style.scss';
import { formatCurrency } from "../../utils/formatCurrency";
import { Link} from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import { FaCartArrowDown } from "react-icons/fa";
import listProduct from "../../data/product";
const FavoritePage = () => {
  const { favoriteItems,addToCart,isLogin,removeFromFavorite } = useCart();
  const handleAddToCart = (id) => {
      const product = listProduct.find((item)=> item.id === id)
      if(isLogin){
        addToCart(product, 1);
        toast.success("Add product successfully !", {
          autoClose : 1500,
          onClose : () => {
            removeFromFavorite(id);
          }
        });
      }else {
        toast.warning("You need to login to continue using !", {
          autoClose : 2000,
        })
      }
    };
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
                <h2>Favorite product</h2>
                <div className="breadcrumb__option">
                  <Link to="/">Home</Link>
                  <span>Favorite</span>
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
                                    <th></th>                     
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {favoriteItems.length === 0 ? (
                                  <tr>
                                    <td colSpan="5">
                                      <p>Sản phẩm yêu thích trống !</p>
                                      <Link to="/shop" className="primary-btn">
                                        TIẾP TỤC MUA SẮM
                                      </Link>
                                    </td>
                                  </tr>
                                ) : (
                                  favoriteItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="shoping__cart__item">
                                            <img src={item.src} alt={item.name}/>
                                            <h5>{item.name}</h5>
                                        </td>
                                        <td className="shoping__cart__price">
                                            {formatCurrency(item.price)}
                                        </td>                                                                              
                                        <td className="shoping__cart__total">
                                           <a href="#" className="primary-btn btn-add" onClick={() => handleAddToCart(item.id)}>
                                            <FaCartArrowDown/>
                                          </a>
                                        </td>
                                        <td className="shoping__cart__item__close">
                                            <span onClick={() => removeFromFavorite(item.id)}>×</span>
                                        </td>
                                    </tr>
                                  ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </MainLayout>
  );
};

export default FavoritePage;
