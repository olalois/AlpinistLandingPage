// ARRAY OF IMAGES
// ARRAY OF IMAGES
const images = [
    "images/BLAQ-0267-min.jpg",
    "images/BLAQ-0152-min.JPG",
    "images/BLAQ-0146-min.JPG",
    "images/BLAQ-0091-min.JPG",
    "images/BLAQ-0076-min.JPG",
    "images/BLAQ-0030-min.jpg",
    "images/BLAQ-0028-min.JPG",
    "images/BLAQ-0019-min.jpg",
    "images/BLAQ-0013-min.jpg",
    "images/BLAQ-0009-min.jpg",
    "images/24-min.jpg"
];

// Get DOM elements
const imageWrapper = document.querySelector(".slideshow-images");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Track current slide and number of images to show
let currentIndex = 0;
let imagesToShow = calculateImagesToShow();

// Function to calculate images to show based on screen size
function calculateImagesToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 4500) return 11;
    if (screenWidth >= 3500) return 9;
    if (screenWidth >= 3000) return 7;
    if (screenWidth >= 2000) return 5;
    if (screenWidth >= 1800) return 5;
    if (screenWidth >= 1500) return 3;
    if (screenWidth >= 1280) return 3;
    if (screenWidth >= 1024) return 3;
    if (screenWidth >= 915) return 3;
    if (screenWidth >= 853) return 3; // Show 5 images on large screens
    if (screenWidth >= 820) return 3; // Show 4 images on medium screens
    if (screenWidth >= 768) return 3;
    if (screenWidth >= 540) return 1;
    if (screenWidth >= 430) return 1;
    if (screenWidth >= 100) return 1;
    return 3; // Default to 8 images on smaller screens
}

// Render images
function renderImages() {
    imageWrapper.innerHTML = ""; // Clear the container

    // Show the calculated number of images
    for (let i = currentIndex; i < currentIndex + imagesToShow; i++) {
        const img = document.createElement("img");
        img.src = images[i % images.length]; // Wrap around the array
        img.alt = `Image ${i + 1}`;
        img.classList.add("gallery-image");

        // Add the "focused" class only if the number of images to show is odd
        if (imagesToShow % 2 !== 0 && i === currentIndex + Math.floor(imagesToShow / 2)) {
            img.classList.add("focus");
        }

        imageWrapper.appendChild(img);
    }
}

// Event listeners for buttons
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move left, wrap around
    renderImages();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Move right, wrap around
    renderImages();
});

// Recalculate images to show and re-render on window resize
window.addEventListener("resize", () => {
    imagesToShow = calculateImagesToShow();
    renderImages();
});

// Initial render
document.addEventListener("DOMContentLoaded", () => {
    renderImages();
});


// FOR THE MISSION TOGGLING 
const wrapper = document.getElementById('wrapper');
    let Index = 0;

    function cycleText() {
      Index = (Index + 1) % 3;
      wrapper.style.transform = `translateY(-${Index * 40}px)`;
    }

    setInterval(cycleText, 5000);

     let hambugerNav = document.querySelector('.hambuger')
        let navBar = document.querySelector('.nav-elements')
        let close = document.querySelector(".close")
    
    
       hambugerNav.addEventListener('click', function(){
            hambugerNav.style.display = "none"
            navBar.style.display = "flex"
        });

        close.addEventListener('click', function(){
            hambugerNav.style.display = "flex"
            navBar.style.display = "none"
        })