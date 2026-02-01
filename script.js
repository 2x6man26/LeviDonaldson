document.addEventListener("DOMContentLoaded", () => {
  const poemCards = document.querySelectorAll(".poem-card");
  const poems = document.querySelectorAll(".poem-content");
  const placeholder = document.querySelector(".poem-placeholder");

  poemCards.forEach(card => {
    card.addEventListener("click", () => {
      const target = card.dataset.poem;

      poems.forEach(poem => poem.style.display = "none");
      if (placeholder) placeholder.style.display = "none";

      const activePoem = document.getElementById(target);
      if (activePoem) activePoem.style.display = "block";
    });
  });
});
