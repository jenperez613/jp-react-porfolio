import React from "react";
import "./productList.css";
import Product from "../product/Product";
import {products} from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire. It's ToadX</h1>
        <p className="pl-desc">
          ToadX is a creative agency that your website has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
        <Product key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
