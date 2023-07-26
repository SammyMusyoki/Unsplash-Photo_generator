import React, { useState } from 'react';


const SearchBar = () => {

  const [term, setTerm] = useState([])

  const handleFormSubmit = (e) => {
    e.preventDefault()

    onSubmit(term)
  }
  const handleChange = () => {
    setTerm(e.target.value)
  }
  return (
    <div>
      <h1>Search Bar</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="search">Search for Term</label>
        <input type="text" value={term} onChange={handleChange}/>
      </form>
    </div>
  );
};

export default SearchBar;
