const projectIdeas = [
  "Build a weather dashboard using a public API.",
  "Create a personal expense tracker.",
  "Make a daily habit checklist.",
  "Build a recipe finder with search.",
  "Create a quiz game with multiple categories.",
  "Make a simple portfolio website.",
  "Build a book or movie recommendation app.",
];

const generateButton = document.querySelector("#generate-button");
const projectIdea = document.querySelector("#project-idea");

generateButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * projectIdeas.length);
  projectIdea.textContent = projectIdeas[randomIndex];
});
