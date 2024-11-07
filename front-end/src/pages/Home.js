import React, { useState } from "react";
import Navbar from "../components/Navbar.js";
import bg from "../images/background.png";
import Login from "../components/Login.js";
import HomeContent from '../components/HomeContent.js';

const Home = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url(${bg})`,
      }}
    >
      {/* display navigation bar here */}
      <Navbar />

      {clicked ? (
        <Login />
      ) : (
        <HomeContent checkClicked={handleClick}/>
      )}
    </div>
  );
};

export default Home;
