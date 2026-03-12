const params = new URLSearchParams(window.location.search);
const mealType = params.get("mealType");

// Build URL based on whether a meal type filter is applied
const listURL = mealType ? `https://dummyjson.com/recipes/meal-type/${mealType}` : "https://dummyjson.com/recipes?limit=100";

console.log("Filter URL:", listURL);
const listContainer = document.querySelector(".opskrifterBox");

function getRecipes() {
  fetch(listURL)
    .then((res) => res.json())
    .then((data) => {
      const recipes = data.recipes || data;
      showRecipes(recipes);
    })
    .catch((error) => console.error("Error fetching recipes:", error));
}

function showRecipes(recipes) {
  // Start med tom container
  listContainer.innerHTML = "";

  // recipes er et array af objekter
  recipes.forEach((recipe) => {
    listContainer.innerHTML += `
 <article class="recipe-card">
 <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="Billede af ${recipe.name}">
       
                <a class="recipeBtn" href="enkeltopskrift.html?recipeId=${recipe.id}">Recipe</a>
            </article>
    `;
  });
}

// //Filtrer
// const showAllBtn = document.querySelector("#resetBtn");

// let allRecipes = [];

// function getRecipes() {
//   fetch(listURL)
//     .then((res) => res.json())
//     .then((data) => {
//       allRecipes = data.recipes; // gem originaldata
//       showRecipes(allRecipes);
//     });
// }

// showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// // Under 20 min prep Filter
// const filterPrepBtn = document.querySelector("#filterByPrep");

// function filterByPrep() {
//   const filtered = allRecipes.filter((recipe) => recipe.prepTimeMinutes < 20);

//   showRecipes(filtered);
// }

// filterPrepBtn.addEventListener("click", filterByPrep);
// showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// // Under 20 min cooking Filter
// const filterCookBtn = document.querySelector("#filterByCook");

// function filterByCook() {
//   const filtered = allRecipes.filter((recipe) => recipe.cookTimeMinutes < 20);

//   showRecipes(filtered);
// }

// filterCookBtn.addEventListener("click", filterByCook);
// showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// // 4 or less servings Filter
// const filterLessBtn = document.querySelector("#filterByLess");

// function filterByLess() {
//   const filtered = allRecipes.filter((recipe) => recipe.servings <= 4);

//   showRecipes(filtered);
// }

// filterLessBtn.addEventListener("click", filterByLess);
// showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

// // 4 or more servings Filter
// const filterMoreBtn = document.querySelector("#filterByMore");

// function filterByMore() {
//   const filtered = allRecipes.filter((recipe) => recipe.servings >= 4);

//   showRecipes(filtered);
// }

// filterMoreBtn.addEventListener("click", filterByMore);
// showAllBtn.addEventListener("click", () => showRecipes(allRecipes));

getRecipes();
