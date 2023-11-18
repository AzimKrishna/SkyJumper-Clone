document.addEventListener("DOMContentLoaded", function () {
    // Image paths
    const imagePaths = [
        "img/gallery1.webp",
        "img/gallery2.webp",
        "img/gallery3.webp",
        "img/gallery4.webp"
    ];

    // Get the image slider container
    const imageSlider = document.getElementById("imageSlider1");

    // Index to keep track of the current image
    let currentIndex = 0;

    // Function to show the current image
    function showImage() {
        imageSlider.innerHTML = "";

        // Create and append img elements
        imagePaths.forEach((path, index) => {
            const imgElement = document.createElement("img");
            imgElement.src = path;
            imgElement.alt = `Slide Image ${index + 1}`;
            imageSlider.appendChild(imgElement);
        });

        // Update transform property
        imageSlider.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    // Function to move to the next image
    function nextImage() {
        if (currentIndex === imagePaths.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        showImage();
    }

    // Function to move to the previous image
    function prevImage() {
        if (currentIndex === 0) {
            currentIndex = imagePaths.length - 1;
        } else {
            currentIndex--;
        }
        showImage();
    }

    // Set up initial image
    showImage();

    // Set up interval to change image every 4 seconds
    var slideInterval = setInterval(nextImage, 4000);

    // Event listeners for arrow buttons
    const leftArrow = document.getElementById("prevBtnBooking");
    leftArrow.addEventListener("click", prevImage);

    const rightArrow = document.getElementById("nextBtnBooking");
    rightArrow.addEventListener("click", nextImage);

    // Pause interval on hover and resume on mouseout
    imageSlider.addEventListener("mouseover", () => clearInterval(slideInterval));
    imageSlider.addEventListener("mouseout", () => slideInterval = setInterval(nextImage, 4000));
});


document.addEventListener("DOMContentLoaded", function () {
    const couponsHolder = document.getElementById("couponsHolder");

    function setupInfiniteScroll() {
        const cards = couponsHolder.querySelectorAll(".cards");
        const cardArray = Array.from(cards);

        // Clone the cards for infinite scrolling
        cardArray.forEach((card, index) => {
            const clone = card.cloneNode(true);
            couponsHolder.appendChild(clone);
        });

        // Function to move cards on scroll
        function moveCards() {
            const scrollLeft = couponsHolder.scrollLeft;

            // Check if user has scrolled to the last set of cards
            if (scrollLeft >= cardArray.length * cardArray[0].offsetWidth) {
                couponsHolder.scrollLeft -= cardArray[0].offsetWidth;
            } else if (scrollLeft === 0) {
                couponsHolder.scrollLeft += cardArray.length * cardArray[0].offsetWidth;
            }
        }

        // Set up event listener for scroll
        couponsHolder.addEventListener("scroll", moveCards);
    }

    // Check viewport width and apply infinite scroll only for the specified range
    function checkViewportWidth() {
        const viewportWidth = window.innerWidth;
        if (viewportWidth >= 577 && viewportWidth <= 767) {
            setupInfiniteScroll();
        }
    }

    // Call the function initially and add a resize event listener
    checkViewportWidth();
    window.addEventListener("resize", checkViewportWidth);
});
