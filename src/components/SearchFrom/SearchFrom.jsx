import React, { useRef, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import "./SearchFrom.css"; // Ensure this is correctly spelled according to your file name

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef(''); // Initialize with null for a ref that will hold DOM element
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure the current ref value is not null before calling .focus()
    if(searchText.current) {
      searchText.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(tempSearchTerm);
    }

    navigate("/book");
  }

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input 
                type="text" 
                className='form-control' 
                placeholder='Search for books...' 
                ref={searchText} // Correctly assign the ref here
              />
              <button type="submit" className='flex flex-c'>
                <FaSearch className='text-black' size={42} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
