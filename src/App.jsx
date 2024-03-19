import { HomeLayout, Landing, Recipe, RecipeDetails } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "recipe",
          element: <Recipe />,
        },
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "recipe/:recipeId",
          element: <RecipeDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
