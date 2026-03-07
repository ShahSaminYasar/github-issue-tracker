logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.assign("/");
});
