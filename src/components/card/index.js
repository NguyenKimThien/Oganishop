import { FaHeart, FaRetweet, FaShoppingCart } from "react-icons/fa";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import SlideInOnScroll from "../SlideInOnScroll";
import { useCart } from "../../context/CartContext";
import listProduct from "../../data/product";
import { toast } from "react-toastify";
const ItemProduct = (props) => {
  const { addToCart, addToFavorite } = useCart();
  const navigate = useNavigate();
  const product = listProduct.find((item) => item.id === props.idToDetail);
  const handleClickCard = () => {
      navigate(`/detail/${props.idToDetail}`)
  }
  const handleAddToCart = () => {
    addToCart(product, 1);
    toast.success("Add product successfully !", {
      autoClose: 1500,
    });
  };
  const handleAddToFavorite = () => {
    addToFavorite(product);   
  }
  return (
    <SlideInOnScroll>
      <div className="featured__item">
        <div className="featured__item__pic set-bg">
          <img loading="lazy" src={props.src} alt="product" />
          <ul className="featured__item__pic__hover">
            <li>
              <button onClick={handleAddToFavorite}>
                 <FaHeart />
              </button>
            </li>

            <li>
              <Link to={`/detail/${props.idToDetail}`}>
                <FaRetweet />{" "}
              </Link>
            </li>

            <li>
              <button onClick={handleAddToCart}>
                <FaShoppingCart />
              </button>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <a href="#">{props.text}</a>
          </h6>
          <h5>{props.price}</h5>
        </div>
      </div>
    </SlideInOnScroll>
  );
};
export default ItemProduct;
