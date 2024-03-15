import React from 'react';
import Navbar from "../Navber/Navbar"; // Corrected typo here
import SearchForm from "../SearchFrom/SearchFrom"; // Also make sure the directory name is correct
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
           
          <h2 className='header-title text-capitalize'>find your book of choice</h2>
          <p className='header-text fs-18 fw-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus sit aliquid aperiam ipsam dolores, ipsa animi ad quae dolorum est rem facere, laudantium consequatur aliquam?</p>
          <SearchForm /> 
        </div>
      </header>
    </div>
  );
};

export default Header;
