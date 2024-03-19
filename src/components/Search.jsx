import { useState } from "react";
import { Grid, GridColumn, Form, Input } from "semantic-ui-react";

const Search = ({ setSearchedQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const onFormSubmit = () => {
    setSearchedQuery(inputValue);
  };

  return (
    <>
      <Grid columns={1} textAlign="center">
        <GridColumn>
          <h2 className="search-heading">
            Search Recipes with{" "}
            <span style={{ color: "#2185D0" }}>Cooking</span>
          </h2>
        </GridColumn>
      </Grid>

      <Form className="input-form" onSubmit={onFormSubmit}>
        <Input
          placeholder="search your recipes here..."
          action={{ icon: "search", color: "blue" }}
          style={{ padding: "20px 20px" }}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </Form>
    </>
  );
};
export default Search;
