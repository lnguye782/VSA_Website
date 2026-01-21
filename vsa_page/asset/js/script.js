<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  const titleEl = document.getElementById("lightboxTitle");
  const dateEl = document.getElementById("lightboxDate");
  const descEl = document.getElementById("lightboxDesc");
  const eventLink = document.getElementById("eventLink");

  document.querySelectorAll(".event-card").forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");

      // Image
      lightboxImg.src = img.src;

      // Text
      titleEl.textContent = card.dataset.title || "";
      dateEl.textContent = `${card.dataset.date || ""} • ${card.dataset.location || ""}`;
      descEl.textContent = card.dataset.description || "";

      // Optional link
      if (card.dataset.link) {
        eventLink.href = card.dataset.link;
        eventLink.style.display = "inline-block";
      } else {
        eventLink.style.display = "none";
      }

      lightbox.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  }
});
=======
>>>>>>> 00059cd58a844826dea85d10c1332f519d96aff0
