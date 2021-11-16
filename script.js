const menuBtn = document.getElementById("menu-btn");
const close = document.getElementById("exit-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
