document.addEventListener('DOMContentLoaded', () => {

    // First, check if the Swiper container exists
    if (document.querySelector('.swiper')) {
        // Only initialize Swiper if the element is found
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },

            // Pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // BACK TO THE TOP BTN
    // This code will now run on every page, regardless of whether a carousel exists.
    const btn = document.getElementById('backToTop');
    if (btn) { // Good practice to check if the button exists too
        window.addEventListener('scroll', () => {
            btn.classList.toggle('show', window.scrollY > 200);
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});