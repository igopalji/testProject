// const loginPage =
const app = document.getElementById("root");
let user = [];
user = document.getElementsByClassName("user");
// const username = document.getElementById("username");

function loadPage(pageName) {
  fetch(`pages/${pageName}.html`)
    .then((res) => res.text())
    .then((data) => {
      app.innerHTML = data;
    })
    .catch((err) => console.error("Error fetching content:", err));
}
function loadCar(name, img, dis) {
  const productDetailHTML = `
    <div class="container mt-5">
      <div class="card">
        <div class="row no-gutters">
          <div class="col-md-12">
            <img
              src="${img}"
              class="card-img"
              alt="${name}"
              style="max-width: 400px"
            />
          </div>
          <div class="col-md-12">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${dis}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  app.innerHTML = productDetailHTML;
}
// console.log("value : ", username?.value);

let currentPage = "home";
let userName = "";
function login() {
  // debugger
  loadPage("home");
  const username = document.getElementById("username");
  userName = username.value;
  for (let index = 0; index < user.length; index++) {
    const element = user[index];
    element.innerText = userName;
  }
}
console.log(userName);

const changePage = (page) => {
  currentPage = page;
  loadPage(currentPage);
};

loadPage(currentPage);
