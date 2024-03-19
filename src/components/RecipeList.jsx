import { Container, Header, Grid, GridColumn } from "semantic-ui-react";
import RecipeListItem from "./RecipeListItem";
const RecipeList = ({ recipes, searchedQuery }) => {
  const queryStyle = {
    color: "red",
    fontFamily: "IM Fell French Canon SC",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "35px",
  };

  return (
    <Container>
      <Header size="huge" textAlign="center" color="grey">
        RECIPE LIST FOR <span style={queryStyle}>{searchedQuery}</span>
      </Header>
      <Grid columns={4} doubling>
        {recipes &&
          recipes.map((recipe) => {
            return (
              <GridColumn key={recipe.recipe_id}>
                <RecipeListItem recipe={recipe} />
              </GridColumn>
            );
          })}
      </Grid>
    </Container>
  );
};

export default RecipeList;
