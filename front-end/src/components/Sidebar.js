import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {

  return (
    <div>
    {/* sidebar  */}
    <div className="w-full min-h-screen bg-blue-900 text-white p-1 ">
      <div className="space-y-4 gap-10 pt-20">
        <NavLink to='/Overview' >
          <p className="hover:bg-blue-700 p-2 rounded">Products</p>
        </NavLink>
        <NavLink to='/addProduct' >
          <p className="hover:bg-blue-700 p-2 rounded">Add Products</p>
        </NavLink>
        <NavLink to='/deleteProduct' >
          <p className="hover:bg-blue-700 p-2 rounded">Delete Products</p>
        </NavLink>
      </div>
    </div>
    </div>
  );
}

export default Sidebar;
