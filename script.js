const submit = document.querySelector(".submit");
const ratings = document.getElementsByName("ratings");
const form = document.querySelector(".rating-form");
const ratingState = document.querySelector(".Rating-state");
const thanksState = document.querySelector(".Thank-you-state");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const selector = "input[name=ratings]:checked";
    const checkedInput = document.querySelector(selector);
    if(checkedInput !== null){
        const selectedRating = document.querySelector(".selection");
        selectedRating.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
        ratingState.classList.add("hidden");
        thanksState.classList.remove("hidden");
    }
})
        