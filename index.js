/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
// demo.js

// Step 1: Locate the heart element
const articleHearts = document.querySelectorAll(".like-btn");

// Step 2: Set up mock server communication
function likePost(event) {
    // Simulate sending a request to the server
    console.log("Sending request to like post...");
    // Simulate receiving a response from the server
    console.log("Post liked!");
}

// Step 3: Add event listeners to the like buttons
articleHearts.forEach(heart => {
    heart.addEventListener("click", likePost);
});
// demo.js

document.addEventListener("DOMContentLoaded", function() {
    const likeButtons = document.querySelectorAll(".like");

    likeButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Toggle the like status
            button.classList.toggle("liked");

            // Toggle the heart glyph
            const glyph = button.querySelector(".like-glyph");
            glyph.textContent = glyph.textContent === "♡" ? "♥" : "♡";
        });
    });
});

