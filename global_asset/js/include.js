document.addEventListener("DOMContentLoaded", () => {
  fetch("../partials/header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load header");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });

  fetch("../partials/footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load header");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
});