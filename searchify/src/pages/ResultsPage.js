import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ResultsPage() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:5205/api/Search?query=${query}`)
        .then((response) => {
          console.log('test1 ', response)
          setResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching search results", error);
        });
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
}

export default ResultsPage;
