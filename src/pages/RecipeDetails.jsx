import { useEffect, useState } from "react";
import { getRecipe } from "../services/api";
import { useParams } from "react-router-dom";
import { Grid, Image, Button, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  useEffect(() => {
    const getData = async () => {
      let res = await getRecipe(recipeId);
      if (res && res.recipe) {
        setRecipe(res.recipe);
      }
    };
    getData();
  }, []);
  return Object.keys(recipe).length > 0 ? (
    <Grid container stackable columns={2} className="details-page-content">
      <Grid.Column>
        <Button
          as={Link}
          to={"/recipe"}
          content="Back To Recipe List"
          color="yellow"
          style={{ marginBottom: "40px" }}
        />
        <Image
          src={recipe.image_url}
          style={{ objectFit: "contain", borderRadius: "10px" }}
        />
      </Grid.Column>
      <Grid.Column>
        <Header
          size="medium"
          style={{
            fontFamily: "Times Now Roman",
            color: "#2185D0",
            marginTop: "70px",
          }}
        >
          {recipe.title}
        </Header>
        <p style={{ color: "grey", fontFamily: "sans-serif" }}>
          Provided By :{" "}
          <span style={{ fontFamily: "Euphoria Script", color: "orange" }}>
            {recipe.publisher}
          </span>
        </p>
        <Button
          as={"a"}
          href={recipe.publisher_url}
          target="_blank"
          content="Publisher Webpage"
          color="green"
          style={{ fontFamily: "Times Now Roman", opacity: "80%" }}
        />
        <Button
          as={"a"}
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="blue"
          style={{ fontFamily: "Times Now Roman", opacity: "80%" }}
        />
        <Header size="large" content="Ingredients:" />
        <Segment.Group>
          {recipe &&
            recipe.ingredients.map((data) => {
              return (
                <Segment>
                  <h5 style={{ color: "navy" }}>{data}</h5>
                </Segment>
              );
            })}
        </Segment.Group>
      </Grid.Column>
    </Grid>
  ) : null;
};
export default RecipeDetails;
