import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect((_) => {
    dispatch(fetchProducts());
  }, []);
  console.log("Product=>", products);

  return (
    <div className="ui grid container product-list">
      {Object.keys(products).length === 0 ? (
        <div className="ui" style={{ width: "100vw", height: "86vh" }}>
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      ) : (
        <div className="row">
          <ProductComponent />
        </div>
      )}
    </div>
  );
};

export default ProductListing;
