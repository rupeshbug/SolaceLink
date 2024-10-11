document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  // Toggle mobile menu visibility
  mobileToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Hide mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !mobileMenu.contains(event.target) &&
      !mobileToggle.contains(event.target)
    ) {
      mobileMenu.classList.remove("active");
    }
  });
});
