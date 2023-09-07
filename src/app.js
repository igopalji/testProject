// const loginPage =
const app = document.getElementById("root");

function loadPage(pageName) {
  fetch(`pages/${pageName}.html`)
    .then((res) => res.text())
    .then((data) => {
      app.innerHTML = data;
    })
    .catch((err) => console.error("Error fetching content:", err));
}

let currentPage = "home";

const changePage = (page) => {
  currentPage = page;
  loadPage(currentPage);
};
loadPage(currentPage);
