import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [autocomplete, setAutocomplete] = useState([]);
  const navigate = useNavigate();

  // Handle the change in the search input
  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      // Fetch autocomplete suggestions from BE (optional)
      axios
        .get(`http://localhost:5205/api/search?query=${e.target.value}`)
        .then((response) => {
          setAutocomplete(response.data);
        })
        .catch((error) => {
          console.error("Error fetching autocomplete data", error);
        });
    } else {
      setAutocomplete([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the results page with query as parameter
    navigate(`/results?query=${query}`);
  };

  return (
    <div>
      <h1>Searchify</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

      {autocomplete.length > 0 && (
        <ul>
          {autocomplete.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchPage;
