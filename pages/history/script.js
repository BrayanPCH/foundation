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

const btnCloseModal = document.querySelector('.close');
const btnOpenModal = document.querySelector('.gallery ul li a');

console.log(btnOpenModal);

btnCloseModal.addEventListener('click', c => {
    console.log("Hola BB");
});

btnOpenModal.addEventListener('click', c => {
    console.log("Open");
});

