// $(document).ready(function () {
//     console.log('ready');
//     // portfolio
//     $('.gallery ul li a').click(function () {
//         var itemID = $(this).attr('href');
//         $('.gallery ul').addClass('item_open');
//         $(itemID).addClass('item_open');
//         return false;
//     });
//     $('.close').click(function () {
//         $('.port, .gallery ul').removeClass('item_open');
//         return false;
//     });

//     $(".gallery ul li a").click(function () {
//         $('html, body').animate({
//             scrollTop: parseInt($("#top").offset().top)
//         }, 400);
//     });
// });

// const btnCloseModal = document.querySelector('.close');
// const btnOpenModal = document.querySelector('.gallery ul li a');

// console.log(btnOpenModal);

// btnCloseModal.addEventListener('click', c => {
//     console.log("Hola BB");
// });

// btnOpenModal.addEventListener('click', c => {
//     console.log("Open");
// });

$(document).ready(function() {
    console.log('ready');
    // portfolio
$('.gallery ul li a').click(function () {
    var itemID = $(this).attr('href');
    $('.gallery ul').addClass('item_open');
    $(itemID).addClass('item_open');
    return false;
});
$('.close').click(function () {
    $('.port, .gallery ul').removeClass('item_open');
    return false;
});

$(".gallery ul li a").click(function () {
    $('html, body').animate({
        scrollTop: parseInt($("#top").offset().top)
    }, 400);
});
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const banner = document.querySelector(".banner");
    var winTop = window.scrollY
    if (winTop < 150) {
        
        header.classList.remove("wrapper-active-intermediate");
    }else{
        if (winTop >=150 && winTop < 300) {
            header.classList.add("wrapper-active-intermediate");
            header.classList.remove("wrapper-active");
            banner.classList.remove("banner-last");
        } else {
            banner.classList.add("banner-last");
            header.classList.add("wrapper-active");
        }
    }
});


