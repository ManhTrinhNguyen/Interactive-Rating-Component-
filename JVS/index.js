const submitBtn = document.querySelector(".btn")
const card_1 = document.querySelector(".card-1")
const card_2 = document.querySelector(".card-2")
const ratingBtns = document.querySelectorAll(".btn-rating")
let stars_score = 3
const score = document.querySelector(".score")


submitBtn.addEventListener("click", () => {
    card_1.classList.add("hide")
    score.textContent = stars_score
    card_2.classList.remove("hide")
})

ratingBtns.forEach(btn => {
    btn.addEventListener("click", handleRatingBtn)
})

function handleRatingBtn(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove("active")
    });

    
    if (event.target.classList.contains("btn-rating")) {
        event.target.classList.add("active")
    }else {
       event.target.parentElement.classList.add("active")
    }

    stars_score = event.target.textContent
    console.log(stars_score)
}
