const { read, write } = require("../read-write");
const fs = require("fs");

const getRecipes = async (req, res) => {
  try {
    let output = await parseTemplate("recipes_form");
    res.status(200).send(output);
  } catch (err) {
    console.log(err);
    res.status(500).send("Invalid Server Error!");
  }
};

const postRecipes = async (req, res) => {
  try {
    let { pizza } = req.body;
    let output = await parseTemplate("recipes", {
      pizza: pizza,
    });
    res.status(200).send(output);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const parseTemplate = async (template, data = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        if (err) reject(err);

        if (data) {
          for (d in data) {
            content = content.replace(`{{${d}}}`, data[d]);
          }
        }

        return resolve(content);
      }
    );
  });
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
  postRecipes,
};
