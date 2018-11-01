const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const data = require("./data.js");

mongoose
  .connect("mongodb://localhost/recipeApp")
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const recipesSchema = new Schema({
  title: { type: String, required: true },
  level: {
    level: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  },
  ingredients: Array,
  cuisine: { type: String, required: true },
  dishType: {
    type: String,
    enum: ["Breakfast", "Dish", "Snack", "Drink", "Dessert", "Other"]
  },
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: { type: Number, min: 0 },
  creator: String,
  created: { type: Date, default: Date.now }
});

//how to link it to our schema
const recipe = mongoose.model("recipe", recipesSchema);

//Iteration 2 - Create a recipe
//Iteration 3 - Insert Many recipes

// Model.create
// with a Promise version
// Create a new recipe ('Architect')
//var myRecipes = new Schema({});
// recipe
//   .insertMany(data) // Create a new user and return a promise
//   .then(newRecipe => {
//     console.log("Recipe title");
//   })
//   .catch(err => {
//     console.log("An error occured", err);
//   });

// // Iteration 4 - Update recipe

// recipe
//   .updateOne({ title: "Rigatoni alla Genovese" }, { duration: 100 })
//   .then(newRecipe => {
//     console.log("Recipe title");
//   })
//   .catch(err => {
//     console.log("An error occured", err);
//   });

//Iteration 5 - Remove a recipe
recipe
  .deleteOne({ title: "Carrot Cake" })
  .then(newRecipe => {
    console.log("it's been removed");
  })
  .catch(err => {
    console.log("An error occured", err);
  });
