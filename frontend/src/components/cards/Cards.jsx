import React, { useState } from "react";
import "./Cards.scss";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/features/Basker";
import { useNavigate } from "react-router-dom";
const Cards = ({product}) => {
  const navigate = useNavigate()
    console.log(product);
const dispacth = useDispatch()
    const [heart, setHeart] = useState(false)
    const toggle=()=>{
        setHeart(!heart)
    }
    const addToBasket=(e, product)=>{
      e.stopPropagation()
      dispacth(addBasket(product))
    }
    
  return (
        
           
                <div className="col-lg-4 col-sm-12 card cardss " onClick={()=>navigate(`/productdetail/${product._id}`)} >
          <div className="heart">
          {
            heart ? (
            <i className="fa-solid fa-heart" onClick={()=>{toggle()}} style={{color:"red",fontSize:"20px"}} ></i>

            ) : (
                <i className="fa-regular fa-heart" style={{fontSize:"20px"}} onClick={()=>{toggle()}}></i>

            )
          }
          </div>
          <div className="img">
            <img
              src={product.image}
              alt=""
            />
          </div>
          <div className="card-container">
            <h4 className="card-title">{product.name}</h4>
            <p className="price">${product.price}</p>
            <button className="btn" onClick={(e)=>{addToBasket(e,product)}}>Add to cart</button>
          </div>
        </div>
          
  );
};

export default Cards;
