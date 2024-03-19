import { Link } from "react-router-dom";
import { Card, CardContent, Button } from "semantic-ui-react";

const RecipeListItem = ({ recipe }) => {
  return (
    <Card key={recipe.recipe_id} className="recipe-card">
      <img
        src={recipe.image_url}
        alt={recipe.title}
        style={{ height: "170px", objectFit: "cover" }}
      />
      <Card.Content>
        <Card.Header
          content={recipe.title}
          style={{
            fontFamily: "IM Fell French Canon SC",
            color: "#2185D0",
          }}
        />
        <Card.Description
          style={{
            color: "grey",
            opacity: "80%",
          }}
        >
          <h4 className="euphoria-script-regular">
            Created By{" "}
            <span style={{ color: "#2185D0" }}>{recipe.publisher}</span>
          </h4>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button
          as={Link}
          to={`/recipe/${recipe.recipe_id}`}
          content="Details"
          color="blue"
          size="tiny"
          className="details_btn"
        />
        <Button
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
          size="tiny"
        />
      </Card.Content>
    </Card>
  );
};
export default RecipeListItem;
