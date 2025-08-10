let userData = [];

const searchInput = document.getElementById("searchBar");
const resultList = document.getElementById("userlist");
const detailBox = document.getElementById("detailbox");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    userData = data;
  })
  .catch(() => {
    resultList.innerHTML = "<li>Error fetching data</li>";
  });

function debounceFunc(func, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function renderList(items) {
  detailBox.innerHTML = "";
  resultList.innerHTML = "";
  if (items.length === 0) {
    resultList.innerHTML = "<li>No results found</li>";
    return;
  }

  if (searchInput.value === "") {
    return;
  }

  items.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.name;
    li.dataset.userId = user.id;
    resultList.appendChild(li);
  });
}

function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();

  const filtered = userData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  renderList(filtered);
}

const debouncedSearch = debounceFunc(handleSearch, 300);

searchInput.addEventListener("input", debouncedSearch);

resultList.addEventListener("click", function (e) {
  const li = e.target;

  if (li.tagName === "LI" && li.dataset.userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${li.dataset.userId}`)
      .then((res) => res.json())
      .then((user) => {
        detailBox.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      `;
      })
      .catch(() => {
        detailBox.textContent = "Error fetching the user details.";
      });
  }
});
