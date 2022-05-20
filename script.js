/*
    TODO: --------------------------------------------------------------------------------------------------------
    TODO: JS HEADER
    TODO: --------------------------------------------------------------------------------------------------------
*/

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    var winTop = window.scrollY
    if (winTop >= 150) {
        header.classList.add("wrapper-active");
    } else {
        header.classList.remove("wrapper-active");
    }
});

/*
    TODO: --------------------------------------------------------------------------------------------------------
    TODO: JS CAROUSEL
    TODO: --------------------------------------------------------------------------------------------------------
*/
// Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});