const express = require("express");
const { read, write } = require("./read-write");
const {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("./handlers/recipes");

const app = express();
app.use(express.json());

app.get("/recipes", getRecipes);
app.post("/recipes", createRecipe);
app.delete("/recipes/:recipeIndex", deleteRecipe);
app.put("/recipes/:rIndex", updateRecipe);

app.listen(3000, () => console.log("Server running at port 3000!"));
