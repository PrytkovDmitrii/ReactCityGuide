import React, { useState } from "react";
import "../assest/css/style.scss"

function SearchBar({ data, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); 
  };

  return (
    <div className="search">
      <input className='search__input' type="text" placeholder="Поиск достопримечательностей..." value={searchTerm} onChange={handleInputChange}/>
    </div>
  );
}

export default SearchBar;