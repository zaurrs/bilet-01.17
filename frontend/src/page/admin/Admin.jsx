import React, { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  getData,
  search,
  sorthigh,
  sortLow,
} from "../../redux/features/productSlice";
import { useFormik } from "formik";

const Admin = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const { handleChange, resetForm, onSubmit, handleSubmit, values, errors } =
    useFormik({
      initialValues: {
        image: "",
        price: "",
        category: "",
        name: "",
      },
      onSubmit: (values) => {
        dispatch(addProduct(values));
      },
    });

  return (
    <>
      {modal ? (
        <form action="" onSubmit={handleSubmit}>
          <div className="image">
            <label htmlFor="img">Image</label>
            <input
              type="text"
              name="image"
              id="img"
              placeholder="Image Url"
              onChange={handleChange}
              value={values.image}
            />
          </div>
          <div className="name">
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div className="price">
            <label htmlFor="img">price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="price"
              onChange={handleChange}
              value={values.price}
            />
          </div>
          <div className="category">
            <label htmlFor="category">category</label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="category"
              onChange={handleChange}
              value={values.category}
            />
          </div>
          <button>Submit</button>
          <button onClick={closeModal}>Close</button>
        </form>
      ) : (
        <p></p>
      )}
      <button onClick={openModal}>Create</button>
      <br />
      <button
        onClick={() => {
          dispatch(sortLow());
        }}
      >
        low
      </button>
      <button onClick={() => dispatch(sorthigh())}>high</button>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => dispatch(search(e.target.value))}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>image</th>
            <th> Name</th>
            <th>Category</th>
            <th>price</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>${item.price}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deleteProduct(item._id));
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Admin;
