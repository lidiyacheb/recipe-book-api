var http = require('http'),                                                
    Stream = require('stream').Transform,                                  
    fs = require('fs');  
    
const recipes = require("./recipeAPI");

const getImage = (url, filename) => {
  http.request(url, function(response) {                                        
    var data = new Stream();                                                    
  
    response.on('data', function(chunk) {                                       
      data.push(chunk);                                                         
    });                                                                         
  
    response.on('end', function() {                                             
      fs.writeFileSync(`./static/${filename}`, data.read());                               
    });                                                                         
  }).end();
}

recipes.map((recipe) => {
  recipe.fields.images.map((image) => {
    getImage(`http:${image.fields.file.url}`, image.fields.file.fileName)
  });
})

console.log("********************")

// const createString = (slug, imageNames) => {
//   console.log(`UPDATE recipes SET images='{${imageNames}}' WHERE slug='${slug}'`)
// }

// recipes.map((recipe) => {
//   const slug = recipe.fields.slug
//   let imageNames = []
//   recipe.fields.images.map((image) => {
//     imageNames.push(` ${image.fields.file.fileName}`)
//   })
//   createString(slug, imageNames)
// })

// recipes.map((recipe) => {
//   const slug = recipe.fields.slug
//   const ingredients = recipe.fields.ingredientList
//   var result = Object.keys(ingredients).map((key) => [key, ingredients[key]]);

//   console.log(result[0], result[1])

//   console.log(`UPDATE recipes SET ingredients='{${result.map((item) => `'${item}'`)}}' WHERE slug='${slug}'`)
// })

recipes.map((recipe) => {
  
  const ingredients = recipe.fields.ingredientList
  const newList = Object.keys(ingredients).map((key) => [key.replace(/['"]+/g, ''), ingredients[key].replace(/['"]+/g, '')])
  console.log(`UPDATE recipes SET ingredients='{${newList.toString()}}' WHERE slug='${recipe.fields.slug}'`)
})