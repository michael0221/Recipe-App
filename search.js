const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "91f7b06a";
const APP_key = "97358ea0c286133f272717dab0aeb29e";
// console.log(container)
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${
            result.recipe.url
          }">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"
        }</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}


class Recipes { 

  constructor(name, description, instruction, image, ingredients) { 

    this.name = name; 

    this.description =  description; 

    this.instruction = instruction; 

    this.image = image;

    this.ingredients = ingredients;

  } 

  getDetails(){ 

      return (`The recipe is ${this.name}. ${this.description}.what are need to make this meal are ${this.instruction}. ${this.ingredients} in making ${this.name}. . `) 

  } 

} 

let recipe1 = new Recipes('Jollof Rice', 'Jolof Rice is an african dish which is the subclass of the rice family', 'Rice, Tomato, Pepper, Salt', 'Jollof Rice', 'First step pour rice then add tomota then lorem ipsum'); 

// let car2 = new Cars('Mercedes AMG One', 'Mercedes', '$2700K'); 

console.log(recipe1.name);     

// console.log(car2.maker);   

console.log(recipe1.getDetails()); 