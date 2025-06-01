// Jika ingin menambahkan konten baru dengan behaviour yang sama:
// 1. Tambahkan tombol dengan kelas 'custom-price-button' dan atribut 'data-target'. Pastikan data-target sesuai dengan id targetnya.
// 2. Tambahkan elemen konten dengan kelas 'custom-price-content' dan id yang sesuai dengan 'data-target' tombol.

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".custom-price-button");
  const contents = document.querySelectorAll(".custom-price-content");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      //
      const targetButton = e.target.closest("button");
      const target = targetButton.getAttribute("data-target");

      // Bila data-target tombol (btn) sesuai dengan target yang diklik, tambahkan kelas 'active' dan 'show'.
      buttons.forEach((btn) => {
        const isActive = btn.getAttribute("data-target") === target;
        btn.classList.toggle("active", isActive);
        btn.classList.toggle("show", isActive);
      });

      // Update class untuk konten. Bila id sesuai dengan data-target,tambahkan active & show di classnya.
      // Bila tidak, akan dihilangkan show & active dari class
      contents.forEach((content) => {
        const isContentActive = content.getAttribute("id") === target;
        content.classList.toggle("show", isContentActive);
        content.classList.toggle("active", isContentActive);
        content.classList.toggle("d-none", !isContentActive);
      });
    });
  });
});
