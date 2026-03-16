console.log("henter");
const params = new URLSearchParams(window.location.search);
const id = params.get("recipeId");

console.log("id:", id);

// const id = 1528;
const recipeURL = "https://dummyjson.com/recipes/" + id;
const recipeContainer = document.querySelector("#details-box");

function getRecipes() {
  fetch(recipeURL).then((res) => res.json().then((recipe) => show(recipe)));
}

function show(recipe) {
  recipeContainer.innerHTML = `
  <section>
            <div class="opskriftSection">
                <div class="opskriftHeader">
                    <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="Billede af ${recipe.name}">
                   <div class="recipe-info">
                      <h2>${recipe.name}</h2>
                      <p><span>Prep time:</span><span>${recipe.prepTimeMinutes} min.</span></p>
                      <p><span>Cooking time:</span><span>${recipe.cookTimeMinutes} min.</span></p>
                      <p><span>Servings:</span><span>${recipe.servings}</span></p>
                      <p><span>Difficulty:</span><span>${recipe.difficulty}</span></p>
                      <p><span>Rating:</span><span>${recipe.rating}/5 stjerner af ${recipe.reviewCount} bedømmelser. </span></p>
                    </div>

                </div>
                <div class="infobox">
                    <button type="button" class="collapsible">▶ Ingredienser</button>
                    <div class="content">
                        <ol><li>${recipe.ingredients.join("</li><li>")}</li></ol>
                    </div>

                    <button type="button" class="collapsible">▶ Instruktioner</button>
                    <div class="content">
                        <ol><li>${recipe.instructions.join("</li><li>")}</li></ol>
                    </div>

                    <button type="button" class="collapsible">▶ Information</button>
                    <div class="content">
                        <p>Cuisine: ${recipe.cuisine}</p>
                        <br>
                        <p>Calories per serving: ${recipe.caloriesPerServing}</p>
                        <br>
                        <p>Meal type: ${recipe.mealType.join(", ")}</p>
                        <br>
                        <p>Rating: ${recipe.rating} | Review count: ${recipe.reviewCount}</p>
                        <br>
                        <p>Tags: ${recipe.tags.join(", ")}</p>
                    </div>
                </div>
            </div>

            <div class="kommentarSection">
                <p>3 Kommentarer</p>

                <div class="box">
                    <h3>Cecilia</h3>
                    <p>Prøvede den her opskrift i går, vildt lækker!</p>
                </div>

                <div class="box">
                    <h3>Martin</h3>
                    <p>Den var hamar-god haha.. (fik du den?)</p>
                </div>

                <div class="box">
                    <h3>Anemone</h3>
                    <p>Lækker nem opskrift, laver helt klart igen en anden gang!</p>
                </div>

                <p class="skrivHer">Skriv din egen kommentar</p>

                <input class="box2" name="kommentar" type="text" placeholder="Skriv en kommentar..." required>


                <button type="submit" class="orangeBtn button">Send</button>

            </div>

            <div class="ratingSection">

                <h2>Bedøm Opskriften</h2>
                <div class="rating">

                    <input type="radio" id="star5" name="rating" value="5">
                    <label for="star5">★</label>

                    <input type="radio" id="star4" name="rating" value="4">
                    <label for="star4">★</label>

                    <input type="radio" id="star3" name="rating" value="3">
                    <label for="star3">★</label>

                    <input type="radio" id="star2" name="rating" value="2">
                    <label for="star2">★</label>

                    <input type="radio" id="star1" name="rating" value="1">
                    <label for="star1">★</label>

                </div>
                <button type="submit" class="orangeBtn button">Indsend</button>

            </div>
        </section>`;
  const coll = document.querySelectorAll(".collapsible");

  coll.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
}

getRecipes();
