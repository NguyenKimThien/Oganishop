import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import ItemProduct from "../../../components/card";
import { formatCurrency } from "../../../utils/formatCurrency";
const ProductList = ({ProductList}) => {
  const listFilter = ["All", "Fastfood", "Fresh meat", "Vegetables"];
  const [Filter, setFilter] = useState("All");
  const Products =
    Filter === "All"
      ? ProductList
      : ProductList.filter((item, index) =>
          item.categories
            .map((c) => c.toUpperCase())
            .includes(Filter.toUpperCase())
        );
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="filter__item">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="filter__sort">
                <span>Sort By</span>
                <select onChange={handleChange}>
                  {listFilter.map((filter, index) => (
                    <option value={filter} key={index}>
                      {filter}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="filter__found">
                <h6>
                  <span>{Products.length}</span> Products found
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="filter__option">
                <IoGrid />
                <FaList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {Products.map((product, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={index}>           
              <ItemProduct
                idToDetail={product.id}
                src={product.src}
                text={product.text}
                price={formatCurrency(product.price)}
                key={`${product.price}-${index}`}
              />            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
