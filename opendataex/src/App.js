import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Stores the searched term
  const [ingredient, setIngredient] = useState(null); // Stores ingredient data
  const [error, setError] = useState(null); // Stores errors

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setError("Please enter an ingredient to search.");
      setIngredient(null);
      return;
    }

    setError(null); // Clear previous errors
    setIngredient(null); // Clear previous results

    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${searchTerm}`)
      .then((response) => {
        if (response.data.ingredients && response.data.ingredients.length > 0) {
          setIngredient(response.data.ingredients[0]); // Set the first matching ingredient
        } else {
          setError("No ingredient found. Please try a different term.");
        }
      })
      .catch(() => {
        setError("Error fetching data. Please try again later.");
      });
  };

  return (
    <div className="App">
      <h1>Search for an Ingredient</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter ingredient (e.g., vodka, lime)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error ? (
        <p className="error">{error}</p>
      ) : ingredient ? (
        <div className="ingredient-card">
          <h2>{ingredient.strIngredient}</h2>
          <p>
            <strong>Type:</strong> {ingredient.strType || "N/A"}
          </p>
          <p>
            <strong>Alcoholic:</strong> {ingredient.strAlcohol === "Yes" ? "Yes" : "No"}
          </p>
          <p>
            <strong>ABV:</strong> {ingredient.strABV || "N/A"}
          </p>
          <h3>Description:</h3>
          <p>{ingredient.strDescription || "No description available."}</p>
        </div>
      ) : (
        <p>Enter an ingredient to get started.</p>
      )}
    </div>
  );
}

export default App;