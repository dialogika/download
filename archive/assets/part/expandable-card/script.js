$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true,
});
$(document).ready(function () {
  // Click on item animation
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
    updateLinks();
  });

  // Show/hide carousel links
  function updateLinks() {
    $(".custom-carousel .item").each(function () {
      const link = $(this).find("a");
      if ($(this).hasClass("active")) {
        link.css("pointer-events", "auto"); // Buat link bisa diklik
      } else {
        link.css("pointer-events", "none"); // Buat link tidak bisa diklik
      }
    });
  }
  updateLinks();

  // Follow cursor animation
  document
    .querySelectorAll("section.border-skin.hover-anim .container .card-inner")
    .forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const moveX = (x - 0.5) * 20; // Edit followw speed
        const moveY = (y - 0.5) * 20;

        this.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translate(0, 0)";
      });
    });
});
