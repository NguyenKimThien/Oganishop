import { FaPhone } from 'react-icons/fa';
import './style.scss'
const Search = () => {
  return (
    <div className="hero__search">
      <div className="hero__search__form">
        <form action="#">
          <div className="hero__search__categories">
            All Categories
            <span className="arrow_carrot-down"></span>
          </div>
          <input type="text" placeholder="What do yo u need?" />
          <button type="submit" className="site-btn">
            SEARCH
          </button>
        </form>
      </div>
      <div className="hero__search__phone">
        <div className="hero__search__phone__icon">
          <FaPhone/>
        </div>
        <div className="hero__search__phone__text">
          <h5>+65 11.188.888</h5>
          <span>support 24/7 time</span>
        </div>
      </div>
    </div>
  );
};
export default Search;
