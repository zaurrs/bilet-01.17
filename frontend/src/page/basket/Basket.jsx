import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import "./Basket.scss"
import { deleteBasket, minusBtn, plusBtn } from "../../redux/features/Basker";

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  console.log(basket);
const totalPrice = basket.reduce((acc, item)=>acc + item.count*item.price, 0)
const deleteToBasket=(product)=>{
  dispatch(deleteBasket(product))
}


const plusToBtn=(product)=>{
  dispatch(plusBtn(product))
}
const minusToBtn=(product)=>{
  dispatch(minusBtn(product))
}


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>image</th>
          <th> Name</th>
          <th>Category</th>
          <th>Count</th>
          <th>Price</th>
          <th>+-</th>
          <th>Settings</th>
        </tr>
      </thead>
      <tbody>
        {basket.map((item) => (
          <tr key={item._id}>
            <td>
              <img src={item.image} alt="" />
            </td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.count}</td>
            <td>{(item.price * item.count).toFixed(2)}</td>
            <td>
              <button onClick={()=>{plusToBtn(item)}}>+</button>
              <p>{item.count}</p>
              <button onClick={()=>{minusToBtn(item)}}>-</button>
            </td>
            <td>
              <button onClick={()=>{deleteToBasket(item)}}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <h1 className="totalPrice">TotalPrice: $ {totalPrice.toFixed(2)}</h1>
    </Table>
  );
};

export default Basket;
