//titolo che cambia colore al passaggio del mouse
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".animated-title");
  
    title.addEventListener("mouseover", () => {
      title.style.color = "#ff0000";
    });
  
    title.addEventListener("mouseout", () => {
      title.style.color = "white";
    });
  });
  