import { Link } from "react-router-dom";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { ToastContainer } from "react-toastify";
import { getRecipes } from "../services/api";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Recipe = () => {
  const [searchedQuery, setSearchedQuery] = useState("pizza");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSearchResult();
  }, [searchedQuery]);

  const getSearchResult = async () => {
    let result = await getRecipes(searchedQuery);
    if (result && result.recipes) {
      setRecipes(result.recipes);
    }
  };

  return (
    <div className="recipe_page">
      <Search setSearchedQuery={setSearchedQuery} />
      <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        transition="Bounce"
        pauseOnHover
      />
      <Footer />
    </div>
  );
};
export default Recipe;
