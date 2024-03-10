// script.js
const bookTitle = document.getElementById("bookTitle");
const review = document.getElementById("review");
const reviews = document.getElementById("reviews");

function submitReview() {
    const title = bookTitle.value.trim();
    const reviewText = review.value.trim();
    if (title !== "" && reviewText !== "") {
        const reviewItem = document.createElement("div");
        reviewItem.innerHTML = `<h3>${title}</h3><p>${reviewText}</p>`;
        reviews.appendChild(reviewItem);
        bookTitle.value = "";
        review.value = "";
    }
}
