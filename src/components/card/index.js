import { FaHeart, FaRetweet, FaShoppingCart } from 'react-icons/fa'
import './style.scss'
import { Link } from 'react-router-dom'
import SlideInOnScroll from '../SlideInOnScroll'
const ItemProduct = (props) => {
    return(
        <SlideInOnScroll>
            <div className="featured__item">
            <div className="featured__item__pic set-bg">
                <img loading='lazy' src={props.src} alt="product" />
                <ul className="featured__item__pic__hover">                                                                
                    <li>
                        <Link to = "/"><FaHeart/></Link>
                    </li>
                    
                    <li>
                        <Link to = {`/detail/${props.idToDetail}`}><FaRetweet/> </Link>
                    </li>
                   
                    <li>
                        <Link to="/"><FaShoppingCart/></Link>
                    </li>
                </ul>
            </div>
            <div className="featured__item__text">
                <h6><a href="#">{props.text}</a></h6>
                <h5>{props.price}</h5>
            </div>
        </div> 
        </SlideInOnScroll>
    )

}
export default ItemProduct