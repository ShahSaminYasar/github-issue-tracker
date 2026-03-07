tabsContainer.addEventListener("click", (e) => changeTab(e));

const changeTab = (e) => {
  const targetBtn = e?.target?.closest(".tab-btn");

  let tab;
  if (targetBtn) {
    tab = targetBtn.dataset.tab;
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    targetBtn.classList.add("active");
  } else {
    tab = document.querySelector(".tab-btn.active").dataset.tab;
  }

  if (tab) {
    const filteredIssues = [...issues]?.filter(
      (issue) => issue?.status === tab,
    );
    renderIssues(filteredIssues);
  } else {
    renderIssues(issues);
  }
};
