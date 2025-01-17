import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getData } from '../../redux/features/productSlice';

const Detail = () => {
    const {id} = useParams()
    console.log(id);

    const dispatch =useDispatch()
    const { products } = useSelector((state) => state.products);
    console.log(products);

    useEffect(()=>{
        dispatch(getData)
    }, [dispatch])

    useEffect(()=>{
        dispatch(getData)
    }, [products, id])

    const fProduct = products.find((item)=> item._id === id)

  return (
    <div>
      <img src={fProduct?.image} alt="" />
      <h1>{fProduct?.name}</h1>
      <h1>{fProduct?.price}</h1>
      <h1>{fProduct?.category}</h1>
    </div>
  )
}

export default Detail
