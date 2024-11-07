import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { StoreContext } from '../context/StoreContext';
import AddProductForm from '../components/AddProductForm';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';


const AddProducts = () => {
    const { sidebarOpen,setSidebarOpen } = useContext(StoreContext);    
    
    // function for toggle sidebar
    const toggleSidebar = () => {
            setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className="flex">

            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 p-2 bg-blue-900 text-white rounded-md z-50"
            >
                {sidebarOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>

            {/* Sidebar section */}
            <div 
                className={`w-1/6 min-w-[200px] h-screen fixed top-0 left-0 bg-blue-900 text-white p-6 transition-all duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <Sidebar />
            </div>

            {/* Add Product section */}
            <div className={`bg-gray-300 flex-1 ml-[16.66667%] p-4 overflow-y-auto h-screen transition-all duration-300 ${sidebarOpen ? "" : "ml-0"}`}>
                <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-6">Add New Product</h2>
                    <AddProductForm />
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
