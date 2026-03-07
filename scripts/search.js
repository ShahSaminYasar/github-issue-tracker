searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const searchValue = formData.get("search").trim();

  search(searchValue);
});

let searchTimeout;
searchForm.search.addEventListener("input", (e) => {
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => search(e.target.value.trim()), 400);
});

const search = (searchValue) => {
  let api;
  if (searchValue) {
    api = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`;
  } else {
    api = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  }

  setLoading(true);
  fetch(api)
    .then((res) => res.json())
    .then((json) => {
      issues = json?.data;
      changeTab();
    })
    .catch(() => alert("Failed to load issues"));
};
