import React, { useContext} from 'react';
import { StoreContext } from '../context/StoreContext';
import { toast } from "react-toastify";

const DeleteProductItem = () => {
  const { products,setProducts } = useContext(StoreContext);

  // function for delete product
  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    toast.success("Deleted successfully");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Delete Product</h2>
      
      {/* table for display all the products */}
      <table className="min-w-full table-auto bg-white border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-4 text-left">Product Name</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-2 px-4">{product.title}</td>
              <td className="py-2 px-4">${product.price}</td>
              <td className="py-2 px-4">{product.stock}</td>
              <td className="py-2 px-4">
                <button 
                  onClick={() => handleDelete(product.id)} 
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteProductItem;
