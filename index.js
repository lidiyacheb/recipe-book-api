const express = require("express")
const app = express()
const pg = require("pg")

var cors = require("cors");
app.use(cors());

const db = require("./data/db.js"); // importing the db config

app.get("/", async (req, res) => {
  const recipes = await db("recipes"); // making a query to get all recipes
  res.json(recipes);
});

app.get("/:slug", async (req, res) => {
    const { slug } = req.params;
    const recipe = await db("recipes").where({ slug })
    res.json({ recipe });
  });

  const PORT = process.env.PORT || 9000;
  app.listen(PORT, () => {
      console.log(`Our app is running on port ${ PORT }`);
  });

//app.listen("9000", () => console.log("server running on 9000"))