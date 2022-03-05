import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map(({ id, title, category, price, image }) => {
    return (
      <div className="four wide column product-card" key={id}>
        <Link to={`product/${id}`}>
          <div className="ui link cards inner-product-card">
            <div className="card">
              <div className="image product-image-shell">
                <img src={image} alt={title} className="medium product-image" />
              </div>
              <div className="content product-content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta ">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return renderList;
};

export default ProductComponent;
