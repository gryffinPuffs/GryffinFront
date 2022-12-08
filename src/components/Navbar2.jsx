import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar2 = ({ allBooks }) => {
  const [query, setQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState({});

  const onSearch = () => {
    const filteredSearch = allBooks.filter((allBooks) =>
      allBooks.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filteredSearch);
  };

  return (
    <div id="navbar2">
      <NavLink className="linkBook" to="/allbooks">
        Shop All Books
      </NavLink>
      <NavLink className="linkBook" to="/childproducts">
        Children's
      </NavLink>
      <NavLink className="linkBook" to="/teenproducts">
        Teens
      </NavLink>
      <NavLink className="linkBook" to="/adultproducts">
        Adult
      </NavLink>
      <h4 id="search-header">
        <div id="search-bar">
          <input
            placeholder="search books"
            id="search-box"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onSearch} className="search-submit">
            Search
          </button>
        </div>
      </h4>
    </div>
  );
};

export default Navbar2;
