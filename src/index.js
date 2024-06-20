import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>Add Product</h2>
    <AddProduct />
    <h2>Sign Up User</h2>
    <SignUpUser />
  </React.StrictMode>
);
