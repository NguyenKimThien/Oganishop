import product from "../../../data/product";
import "bootstrap/dist/css/bootstrap.min.css";
import { formatCurrency } from "../../../utils/formatCurrency";
import "./style.scss";
import ItemProduct from "../../../components/card";
import { useState } from "react";
import { Link } from "react-router-dom";
const Feature = () => {
  const filterControl = [
    "All",
    "Organes",
    "Fresh Meat",
    "Vegetables",
    "Fastfood",
  ];
  const [activeControl, setActiveControl] = useState("All");
  const filterProduct =
    activeControl.toUpperCase() === filterControl[0].toUpperCase()
      ? product
      : product.filter((item) =>
          item.categories
            .map((c) => c.toUpperCase())
            .includes(activeControl.toUpperCase())
        );
  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Featured Product</h2>
            </div>
            <div className="featured__controls">
              <ul>
                {filterControl.map((control, index) => (
                  <li
                    key={`${control}-${index}`}
                    className={activeControl === control ? "active" : ""}
                    onClick={() => setActiveControl(control)}
                  >
                    {control}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          {filterProduct.slice(0, 8).map((product, index) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
                key={index}
              >    
                  <ItemProduct
                    idToDetail={product.id}
                    src={product.src}
                    text={product.text}
                    price={formatCurrency(product.price)}
                    key={`${product.price}-${index}`}
                  />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Feature;
