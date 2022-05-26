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

// Initialize Swiper Secondary
if (window.innerWidth > 1100) {
    var swiper2 = new Swiper(".mySwiperS", {
        slidesPerView: 3,
        spaceBetween: 30,
        // freeMode: true,
        pagination: {
            el: ".swiper-paginationS",
            clickable: true,
        },
    });
} else {
    var swiper2 = new Swiper(".mySwiperS", {
        slidesPerView: 1,
        spaceBetween: 30,
        // freeMode: true,
        pagination: {
            el: ".swiper-paginationS",
            clickable: true,
        },
    });
}

/*
    TODO: --------------------------------------------------------------------------------------------------------
    TODO: JS OBTAIN COURSES
    TODO: --------------------------------------------------------------------------------------------------------
*/

const URL = 'http://localhost:3000/talleres';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.response);
        console.log(data);
        const information = document.getElementById('courses-content');
        let template = '';
        data.forEach(publication => {
            template += `<div class="courses-content__card">
                            <div class="courses-content__card__course">
                                <h3>${publication.titulo_tall}</h3>
                                <div id="${publication.id_tall}"><img src="./img/img3.jpg" alt=""></div>
                                <i class="fa fa-eye"></i>
                                <p style="display: inline-block;">${publication.visitas_tall}</p>
                                <button name="${publication.id_tall}" class="publication" onclick="openModal()">Ver Detalles
                                </button>
                                <button name="${publication.id_tall}" class="publication" onclick="openModal()">Inscribirme 
                                </button>
                            </div>
                         </div>`;
        });
        information.innerHTML = template;
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${URL}`);
xhr.send();