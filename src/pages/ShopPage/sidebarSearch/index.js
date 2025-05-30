import PriceRangeSlider from "./PriceRangeSlider";
import "./style.scss";
import listProduct from "../../../data/product";
import { formatCurrency } from "../../../utils/formatCurrency";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="" onClick={onClick}>
      <FaAngleRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="" onClick={onClick}>
      <FaAngleLeft />
    </div>
  );
};

const SideBarSearch = ({onPriceChange}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <h4>Department</h4>
        <ul>
          <li>
            <a href="#">Fresh Meat</a>
          </li>
          <li>
            <a href="#">Vegetables</a>
          </li>
          <li>
            <a href="#">Fruit & Nut Gifts</a>
          </li>
          <li>
            <a href="#">Fresh Berries</a>
          </li>
          <li>
            <a href="#">Ocean Foods</a>
          </li>
          <li>
            <a href="#">Butter & Eggs</a>
          </li>
          <li>
            <a href="#">Fastfood</a>
          </li>
          <li>
            <a href="#">Fresh Onion</a>
          </li>
          <li>
            <a href="#">Papayaya & Crisps</a>
          </li>
          <li>
            <a href="#">Oatmeal</a>
          </li>
        </ul>
      </div>
      <div className="sidebar__item">
        <h4>Price</h4>
        <PriceRangeSlider onChangeRange={onPriceChange}/>
      </div>
      <div className="sidebar__item">
        <div className="latest-product__text">
          <h4>Latest Products</h4>
          <Slider {...settings}>
            <div className="latest-prdouct__slider__item">
              {listProduct.slice(0, 3).map((itemProductLatest, index) => (
                <a href="#" className="latest-product__item" key={index}>
                  <div className="latest-product__item__pic">
                    <img src={itemProductLatest.src} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>{itemProductLatest.text}</h6>
                    <span>{formatCurrency(itemProductLatest.price)}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="latest-prdouct__slider__item">
              {listProduct.slice(3, 6).map((itemProductLatest, index) => (
                <a href="#" className="latest-product__item" key={index}>
                  <div className="latest-product__item__pic">
                    <img src={itemProductLatest.src} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>{itemProductLatest.text}</h6>
                    <span>{formatCurrency(itemProductLatest.price)}</span>
                  </div>
                </a>
              ))}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SideBarSearch;
