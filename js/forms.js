const form = document.querySelector("#recipeForm");

form.addEventListener("submit", function(event) {

event.preventDefault();

alert("Tak for din opskrift! 🍝");

form.reset();

});