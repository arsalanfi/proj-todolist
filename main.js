const toggleBtn = document.getElementById("menuToggle");
const closeBtn = document.getElementById("menuClose");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
  backdrop.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  backdrop.classList.remove("active");
});

backdrop.addEventListener("click", () => {
  sidebar.classList.remove("open");
  backdrop.classList.remove("active");
});
