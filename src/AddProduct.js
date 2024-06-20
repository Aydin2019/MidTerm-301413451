import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(product, null, 2));
    console.log(product);
  };

  const handleCancel = () => {
    setProduct({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: ''
    });
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <div className="form-buttons">
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={handleCancel}>CANCEL</button>
      </div>
    </form>
  );
};

export default AddProduct;
