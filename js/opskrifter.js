const listURL = "https://dummyjson.com/recipes?limit=100";
const listContainer = document.querySelector("#recipe-box");

const showAllBtn = document.querySelector("#resetBtn");
const filterPrepBtn = document.querySelector("#filterByPrep");
const filterCookBtn = document.querySelector("#filterByCook");
const filterByInBtn = document.querySelector("#filterByIngredients");
const filterByIn2Btn = document.querySelector("#filterByIngredients2");
const filterLessBtn = document.querySelector("#filterByLess");
const filterMoreBtn = document.querySelector("#filterByMore");
const filterByCalBtn = document.querySelector("#filterByCalories");
const filterByCal2Btn = document.querySelector("#filterByCalories2");

const dropBtn = document.querySelector("#dropBtn");
const dropdown = document.querySelector("#myDropdown");

let allRecipes = [];

function getRecipes() {
  fetch(listURL)
    .then((res) => res.json())
    .then((data) => {
      allRecipes = data.recipes;
      showRecipes(allRecipes);
    })
    .catch((error) => {
      console.error("Fejl ved hentning af opskrifter:", error);
      listContainer.innerHTML = "<p>Der opstod en fejl ved hentning af opskrifter.</p>";
    });
}

function showRecipes(recipes) {
  listContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    listContainer.innerHTML += `
      <article class="recipe-card">
        <img src="${recipe.image}" alt="Billede af ${recipe.name}">
        <div class="cardInfo">
        <h2 class="card-title">${recipe.name}</h2>

        <div class="ikonBox">
        <div class="ikon">
          <img class="ikon-img" src="img-vid/ur-ikon.webp" alt="tid">
          <p>${recipe.prepTimeMinutes + recipe.cookTimeMinutes}</p>
          <p>minutter</p>
        </div>

        <div class="ikon">
          <img class="ikon-img" src="img-vid/person-ikon.webp" alt="tid">
          <p>${recipe.servings}</p>
          <p>serveringer<p/>
        </div>

   <div class="ikon">
          <img class="ikon-img" src="img-vid/carrot-icon.webp" alt="tid">
          <p>${recipe.ingredients.length}</p>
          <p>ingredienser</p>
        </div>
</div>
        <div class="space">
          <p>Sværhedsgrad</p>
          <p>${recipe.difficulty}</p>
        </div>


        <a class="recipeBtn" href="enkeltopskrift.html?recipeId=${recipe.id}">Se Opskrift</a>
        </div>
      </article>
    `;
  });
}

// Filterknapper
showAllBtn.addEventListener("click", () => {
  showRecipes(allRecipes);
});

filterPrepBtn.addEventListener("click", () => {
  const filtered = allRecipes.filter((recipe) => recipe.prepTimeMinutes < 20);
  showRecipes(filtered);
});

filterCookBtn.addEventListener("click", () => {
  const filtered = allRecipes.filter((recipe) => recipe.cookTimeMinutes < 20);
  showRecipes(filtered);
});

filterByInBtn.addEventListener("click", () => {
  const filtered = allRecipes.filter((recipe) => recipe.ingredients.length < 10);
  showRecipes(filtered);
});

filterByIn2Btn.addEventListener("click", () => {
  const filtered = allRecipes.filter((recipe) => recipe.ingredients.length > 10);
  showRecipes(filtered);
});

filterLessBtn.addEventListener("click", () => {
  const filtered = allRecipes.filter((recipe) => recipe.servings <= 4);
  showRecipes(filtered);
});

filterMoreBtn.addEventListener("click", () => {
  const filtered = allRecipes.filter((recipe) => recipe.servings >= 4);
  showRecipes(filtered);
});

filterByCalBtn.addEventListener("click", () => {
  const filtered = allRecipes.filter((recipe) => recipe.caloriesPerServing <= 300);
  showRecipes(filtered);
});

filterByCal2Btn.addEventListener("click", () => {
  const filtered = allRecipes.filter((recipe) => recipe.caloriesPerServing <= 500);
  showRecipes(filtered);
});

// Dropdown
dropBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropbtn")) {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
});

getRecipes();
