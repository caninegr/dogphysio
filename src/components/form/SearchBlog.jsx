import React from "react";

const SearchBlog = ({ setSearchQuery }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="ptf-search-form" onClick={handleSubmit}>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        placeholder="Αναζήτηση στο Blog"
      />
      <button>
        <i className="lnil lnil-search-alt"></i>
      </button>
    </form>
  );
};

export default SearchBlog;
