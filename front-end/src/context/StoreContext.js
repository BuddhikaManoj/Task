import React, { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:5000";  // replace with appropriate base API url
    const [products,setProducts] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(true);


    const contextValue = {
        url,
        products,
        sidebarOpen,
        setProducts,
        setSidebarOpen,
    };

    // set token to the token and fetch product list from products and set it to the product object
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => { setProducts(data.products) })
            .catch(error => console.log("error fetching data",error));
    },[]);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;