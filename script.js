
const toggle = document.getElementById("toggle");
const links = document.getElementById("links");

// Open and close the mobile navigation menu
toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after clicking a navigation link
links.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// Automatically display the current year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Reveal elements when they appear on the screen
const items = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
} else {
  items.forEach((item) => item.classList.add("show"));
}
