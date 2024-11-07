import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { StoreContext } from '../context/StoreContext';
import DeleteProductItem from '../components/DeleteProductItem';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const ProductDisplay = () => {
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

            {/* Product table section */}
            <div className={`bg-gray-300  flex-1 ml-[16.66667%] p-4 overflow-y-auto h-screen transition-all duration-300 ${sidebarOpen ? "" : "ml-0"}`}>
                    <DeleteProductItem/>
            </div>
        </div>
    );
};

export default ProductDisplay;
