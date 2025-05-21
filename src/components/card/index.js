import { FaHeart, FaRetweet, FaShoppingCart } from 'react-icons/fa'
import './style.scss'
const ItemProduct = (props) => {
    return(
        <div className="featured__item">
            <div className="featured__item__pic set-bg">
                <img src={props.src} alt="product" />
                <ul className="featured__item__pic__hover">                                                                
                    <li><a href="#"><FaHeart/></a></li>
                    <li><a href="#"><FaRetweet/></a></li>
                    <li><a href="#"><FaShoppingCart/></a></li>
                </ul>
            </div>
            <div className="featured__item__text">
                <h6><a href="#">{props.text}</a></h6>
                <h5>{props.price}</h5>
            </div>
        </div> 
    )

}
export default ItemProduct