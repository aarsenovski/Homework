const { read, write } = require("../read-write");

const getRecipes = async (req, res) => {
  const recipies = await read();
  res.status(200).send(recipies);
};

const createRecipe = async (req, res) => {
  const recipies = await read();
  recipies.push(req.body);
  await write(recipies);
  res.status(201).send("Recipe created");
};

const updateRecipe = async (req, res) => {
  let recipes = await read();
  const recipeIndex = req.params.rIndex;
  recipes = recipes.map((recipe, index) => {
    if (index === Number(recipeIndex)) {
      return {
        ...recipe,
        ...req.body,
      };
    } else {
      return recipe;
    }
  });
  await write(recipes);
  res.status(200).send("Recipe modified");
};

const deleteRecipe = async (req, res) => {
  const recipeIndex = req.params.recipeIndex;
  let recipes = await read();

  recipes = recipes.filter((recipe, index) => index !== Number(recipeIndex));
  await write(recipes);
  res.status(200).send("Recipe deleted");
};

module.exports = {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
