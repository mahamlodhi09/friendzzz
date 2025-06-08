const angryBtn = document.getElementById("angryBtn");
const friendBtn = document.getElementById("friendBtn");
const response = document.getElementById("response");
const reactionImg = document.getElementById("reactionImg");

angryBtn.addEventListener("click", () => {
  window.location.href = "goaway.html"; // redirect immediately
});

friendBtn.addEventListener("click", () => {
  window.location.href = "bestie.html"; // redirect to happy page
});
