import React, { useEffect } from "react";
import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/features/productSlice";
import Cards from "../cards/Cards";
const Products = () => {
  const dispatch =useDispatch()
  const { products } = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(getData()); // Dispatch getData to fetch products when component mounts
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div className="title">
          <h1 className="latest">Latest Products</h1>
          <div className="settings">
            <button>All</button>
            <button>New</button>
            <button>Featured</button>
            <button>Offer</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          {products && products.map((product) => (
              <Cards key={product._id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
