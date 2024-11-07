import React, { useState } from "react";
import { toast } from "react-toastify";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    price: "",
    image: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle Post request
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // should be replaced with backend API by connecting through axios
      const response = await fetch("https://dummyjson.com/products/add");
      const data = await response.json();
      toast.error(data.message);

      // reset form after submission
      setFormData({
        name: "",
        id: "",
        price: "",
        image: "",
        quantity: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Error ! Please try again");
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">

      {/* form to add product */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="id" className="font-medium text-gray-700">
            Product ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="font-medium text-gray-700">
            Product Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
