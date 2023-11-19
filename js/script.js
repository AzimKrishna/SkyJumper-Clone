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
            <div class="glide__slide">
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
            <div class="glide__slide">
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
            <div class="glide__slide">
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
            <div class="glide__slide">
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