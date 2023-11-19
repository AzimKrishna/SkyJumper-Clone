document.addEventListener("DOMContentLoaded", function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 3000,
        hoverpause: true,
        animationTimingFunc: 'ease-in-out',
        gap: 0,
        rewind: true  // Set rewind to true for infinite loop
    });

    glide.mount();

    document.getElementById('prevBtnBooking').addEventListener('click', function () {
        glide.go('<');
    });

    document.getElementById('nextBtnBooking').addEventListener('click', function () {
        glide.go('>');
    });
});

let glideInitialized = false;

function setupGlide() {
    if (!glideInitialized) {
        new Glide('.glide2', {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            rewind: true,
            gap: 20,
        }).mount();
        glideInitialized = true;
    }
}

function destroyGlide() {
    if (glideInitialized) {
        const glideInstance = document.querySelector('.glide2').__glide__;
        if (glideInstance) {
            glideInstance.destroy();
        }
        glideInitialized = false;
        updateCouponsHolder();
    }
}

function checkViewportWidth() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth <= 767) {
        setupGlide();
    } else {
        destroyGlide();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    checkViewportWidth();

    // Listen for window resize events
    window.addEventListener("resize", function () {
        checkViewportWidth();
    });
});


function updateCouponsHolder() {
    const couponsHolder = document.getElementById('couponsHolder');
    
    // Replace the contents of couponsHolder with the Glide slides
    couponsHolder.innerHTML = `
    <div class="glide2">
    <div class="glide__track" data-glide-el="track">
        <div class="glide__slides coupons-holder-slider">
            <div class="glide__slide  gld_slide">
                <div class="cards">
                    <div class="text-holder">
                        <p>Group of 10</p>
                        <h2>20% OFF</h2>
                        <a href="#booking-section">
                            <button class="btn-primary  ">BOOK NOW</button>
                        </a>
                    </div>
                    <div class="img-holder">
                        <img src="img/coupon4.webp" alt="">
                    </div>
                </div>
            </div>
            <div class="glide__slide  gld_slide">
                <div class="cards">
                    <div class="text-holder">
                        <p>Group of 5</p>
                        <h2>10% OFF</h2>
                        <a href="#booking-section">
                            <button class="btn-primary  ">BOOK NOW</button>
                        </a>
                    </div>
                    <div class="img-holder">
                        <img src="img/group-of-5.webp" alt="">
                    </div>
                </div>
            </div>
            <div class="glide__slide  gld_slide">
                <div class="cards">
                    <div class="text-holder">
                        <p>Group of 3</p>
                        <h2>10% OFF</h2>
                        <a href="#booking-section">
                            <button class="btn-primary  ">BOOK NOW</button>
                        </a>
                    </div>
                    <div class="img-holder">
                        <img src="img/group-of-3.webp" alt="">
                    </div>
                </div>
            </div>
            <div class="glide__slide  gld_slide">
                <div class="cards">
                    <div class="text-holder">
                        <p>Single ticket</p>
                        <h2>5% OFF</h2>
                        <a href="#booking-section">
                            <button class="btn-primary  ">BOOK NOW</button>
                        </a>
                    </div>
                    <div class="img-holder">
                        <img src="img/coupon1.webp" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}



document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with the "testimonial-stars" class
    const testimonialStarsElements = document.querySelectorAll('.testimonial-stars');

    // SVG markup
    const starsSVG = `
        <svg preserveAspectRatio="xMidYMid meet" data-bbox="20 87.427 160 25.146"
            viewBox="20 87.427 160 25.146" height="70" width="200"
            xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation"
            aria-hidden="true">
            <g>
                <path fill="#FEDD3F"
                    d="M33.22 87.427l3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.212-9.635L20 97.032l10.156.078 3.064-9.683z"
                    data-color="1"></path>
                <path fill="#FEDD3F"
                    d="M66.61 87.427l3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.212-9.635-8.262-5.906 10.156.078 3.064-9.683z"
                    data-color="1"></path>
                <path fill="#FEDD3F"
                    d="M100 87.427l3.064 9.683 10.156-.078-8.263 5.906 3.213 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078L100 87.427z"
                    data-color="1"></path>
                <path fill="#FEDD3F"
                    d="M133.39 87.427l3.064 9.683 10.156-.078-8.262 5.906 3.212 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078 3.064-9.683z"
                    data-color="1"></path>
                <path fill="#FEDD3F"
                    d="M166.78 87.427l3.064 9.683L180 97.032l-8.262 5.906 3.212 9.635-8.17-6.033-8.17 6.033 3.213-9.635-8.263-5.906 10.156.078 3.064-9.683z"
                    data-color="1"></path>
            </g>
        </svg>
    `;

    // Insert the SVG into each element with the "testimonial-stars" class
    testimonialStarsElements.forEach((element) => {
        element.innerHTML = starsSVG;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    new Glide('.glide3', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        focusAt: 'center',
        rewind: true,
        gap: 30,
        autoplay: 5000, // Set the autoplay interval in milliseconds (5 seconds in this example)
        breakpoints: {
            767: {
                perView: 2,
            },
            576: {
                perView: 1,
            }
        }
    }).mount();
});