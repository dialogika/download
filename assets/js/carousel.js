const images = document.querySelectorAll(".carousel-images img");
const indicatorsContainer = document.getElementById("indicators");
const currentNumSpan = document.getElementById("current-num");
const totalNumSpan = document.getElementById("total-num");

let current = 0;

// Initialize
totalNumSpan.textContent = images.length;
createIndicators();
updateSlides();

function createIndicators() {
  for (let i = 0; i < images.length; i++) {
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    if (i === 0) indicator.classList.add("active");
    indicator.onclick = () => goToSlide(i);
    indicatorsContainer.appendChild(indicator);
  }
}

function updateSlides() {
  const indicators = document.querySelectorAll(".indicator");

  images.forEach((img, index) => {
    // Remove all classes
    img.classList.remove("active", "prev", "next", "far-prev", "far-next");

    if (index === current) {
      img.classList.add("active");
    } else if (index === (current - 1 + images.length) % images.length) {
      img.classList.add("prev");
    } else if (index === (current + 1) % images.length) {
      img.classList.add("next");
    } else if (index === (current - 2 + images.length) % images.length) {
      img.classList.add("far-prev");
    } else if (index === (current + 2) % images.length) {
      img.classList.add("far-next");
    }
  });

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === current);
  });

  currentNumSpan.textContent = current + 1;
}

function nextSlide() {
  current = (current + 1) % images.length;
  updateSlides();
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  updateSlides();
}

function goToSlide(index) {
  current = index;
  updateSlides();
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});

// Touch/swipe support
let startX = 0;
let startY = 0;

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", (e) => {
  if (!startX || !startY) return;

  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;

  const deltaX = startX - endX;
  const deltaY = startY - endY;

  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
    if (deltaX > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }

  startX = 0;
  startY = 0;
});

// Click on side images to navigate
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    if (index !== current) {
      goToSlide(index);
    }
  });
});
