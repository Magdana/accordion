const accordionItem = document.querySelectorAll(".accordion-item");
accordionItem.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".icn");
  header.addEventListener("click", () => {
    const isVisible = content.style.display === "block";
    content.style.display = isVisible ? "none" : "block";
    icon.textContent = isVisible ? "+" : "-";
  });
});
