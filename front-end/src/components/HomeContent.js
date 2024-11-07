import React from "react";

const HomeContent = ({ checkClicked }) => {
  // send the status of get started button to home page
  const clicked = () => {
    checkClicked(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 md:px-8">
      <div className="flex flex-col rounded-lg overflow-hidden w-full max-w-2xl bg-opacity-10 backdrop-filter backdrop-blur-md p-8 shadow-lg">
        <div className="bg-opacity-10 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-4">
            Store Keeping Application
          </h1>
          <p className="text-gray-400 mb-6 text-lg">
            Welcome to the store keeping application where you can manage your
            products, keep track of stock, and much more. Start your journey
            with us by logging in or creating a new account. We provide all the
            tools you need to efficiently manage your store's inventory.
          </p>
          <button
            className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={clicked}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
