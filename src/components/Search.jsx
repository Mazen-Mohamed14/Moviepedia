import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/${searchTerm}`);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex items-center mt-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter movie title..."
          className="px-4 py-2 border rounded-l-md focus:outline-none  h-full text-black"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-slate-700 text-white font-semibold rounded-r-md hover:bg-orange-500 h-full focus:outline-none "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
