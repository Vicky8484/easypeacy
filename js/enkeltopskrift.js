const params = new URLSearchParams(window.location.search);
const id = params.get("recipeId");

console.log("id:", id);

// const id = 1528;
const productURL = "https://dummyjson.com/recipes/" + id;
const productcontainer = document.querySelector("#sections");

function getRecipes() {
  fetch(productURL).then((res) => res.json().then((recipe) => show(recipe)));
}

function show(recipe) {
  productcontainer.innerHTML = `
   <div class="opskriftSection">
                <div class="opskriftHeadingBox">
                    <div class="opskriftImg"><img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="Billede af ${recipe.name}"></div>
                    <div class="titleInfo"><h4 class="product-title">${recipe.name}</h4></div>
                </div>
                <div class="opskriftInfoBox"></div>
            </div>

            <div class="kommentarSection"></div>

            <div class="ratingSection"></div>
  `;
}

getRecipes();
