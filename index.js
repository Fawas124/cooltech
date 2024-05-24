// Get references to the carousel, the first image in the carousel, and the arrow icons
const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

// Initialize variables for tracking drag state and scroll position
let isDragStart = false,
  prevPageX,
  prevScrollLeft;

  // Function to show or hide the arrow icons based on scroll position
const showHideIcons = () => {
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

// Add click event listeners to arrow icons to scroll the carousel
arrowIcons.forEach((icon) => {
  let firstImgWidth = firstImg.clientWidth + 14;
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

// Function to handle the start of dragging
const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touched[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

// Function to handle dragging (moving the carousel)
const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = (e.pageX || e.touched[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

// Function to handle the end of dragging
const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

// Add event listeners for mouse and touch events to enable dragging
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
