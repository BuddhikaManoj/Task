import React from 'react';

const ProductCard = ({ id, name, quantity, images, price }) => {
  return (
    <div className="border rounded-lg p-4 w-60 text-center shadow-md bg-white">
      {/* Display the product image */}
      <img src={images[0]} alt={name} className="w-full h-32 object-cover rounded-md mb-4" />

      {/* Display product name */}
      <h3 className="text-lg font-semibold mb-2">{name}</h3>

      {/* Display product price */}
      <p className="text-gray-800 text-xl font-bold mb-2">${price.toFixed(2)}</p>

      {/* Display product quantity */}
      <p className="text-gray-500 text-sm mb-4">Available Stock: {quantity}</p>

    </div>
  );
};

export default ProductCard;
