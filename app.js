const projectsBtn = document.querySelector("#projectsBtn");

projectsBtn.addEventListener("click", () => {
  const projectsSection = document.querySelector("#projects");
  projectsSection.scrollIntoView({ behavior: "smooth" });
});
