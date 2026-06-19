const tempLabel = document.querySelector("#targetTemp");
const ringTemp = document.querySelector("#ringTemp");
const tempButtons = document.querySelectorAll("[data-temp]");
let targetTemp = 22;

tempButtons.forEach((button) => {
  button.addEventListener("click", () => {
    targetTemp += Number(button.dataset.temp);
    targetTemp = Math.min(28, Math.max(16, targetTemp));
    tempLabel.textContent = `${targetTemp} C`;
    ringTemp.textContent = targetTemp;
  });
});

document.querySelectorAll(".scene-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".scene-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
