import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import "../Semantic-UI-CSS-master/semantic.css";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, description, category } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  useEffect(
    (_) => {
      if (productId && productId !== "") dispatch(fetchProduct(productId));
      return () => {
        dispatch(removeSelectedProduct());
      };
    },
    [productId]
  );
  return (
    <div className="ui grid container" style={{ paddingTop: "6.75rem" }}>
      {Object.keys(product).length === 0 ? (
        <div class="ui segment" style={{ width: "100vw", height: "86vh" }}>
          <div class="ui active inverted dimmer">
            <div class="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      ) : (
        <div
          className="ui placeholder segment"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column 1p" style={{ padding: "0 40px" }}>
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp" style={{ padding: "0 40px" }}>
                <h1 style={{ textAlign: "left" }}>{title}</h1>
                <h2 style={{ textAlign: "left" }}>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3
                  className="ui brown block header"
                  style={{ textAlign: "left" }}
                >
                  {category}
                </h3>
                <p style={{ textAlign: "left" }}>{description}-</p>
                <div
                  className="ui vertical animated button"
                  style={{
                    backgroundColor: "#f2647d",
                    color: "#fff",
                    marginLeft: 0,
                  }}
                  tabIndex="0"
                >
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
