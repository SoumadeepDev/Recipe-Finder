import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="landing_page">
      <h2>Our Recipes</h2>
      <Link to="/recipe">
        <div class="ui animated primary fade button" tabindex="0">
          <div class="visible content">SEARCH RECIPES</div>
          <div class="hidden content">Let's Explore</div>
        </div>
      </Link>
    </div>
  );
};
export default Landing;
