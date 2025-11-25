const collapseBtn = document.getElementById("collapseBtn");
const sidebar = document.querySelector(".sidebar");

collapseBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");

    collapseBtn.querySelector("i").classList.toggle("rotated");
});