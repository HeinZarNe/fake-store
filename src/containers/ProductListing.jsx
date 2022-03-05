import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    dispatch(setProducts(response.data));
  };

  useEffect((_) => {
    fetchProducts();
  }, []);
  console.log("Product=>", products);

  return (
    <div className="ui grid container product-list">
      <div className="row">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
