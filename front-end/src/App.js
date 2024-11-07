import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.js';
import Home from './pages/Home.js';
import ProductDisplay from './pages/ProductDisplay.js';
import AddProducts from './pages/AddProducts.js';
import DeleteProducts from './pages/DeleteProducts.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
              <ToastContainer />  {/* for display errors and success messages */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Overview" element={<ProductDisplay/>} />
        <Route path="/addProduct" element={<AddProducts/>} />
        <Route path="/deleteProduct" element={<DeleteProducts/>} />
      </Routes>
    </div>
  );
}

export default App;
