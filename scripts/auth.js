if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please sign in to continue");
  window.location.assign("/");
}
