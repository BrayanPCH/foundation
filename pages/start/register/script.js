const registerBtn = document.getElementById("container__register");
const closeBtn = document.getElementById('alert-message__close');
const title = document.getElementById('container__title-event');
const info = document.getElementById('alert-message__info')

title.addEventListener('keyup', c => {
    title.style.border = '1.5px solid black';

    var keyValue = c.key;
    var codeValue = c.code;

    console.log("keyup event, keyValue: " + keyValue);
    console.log("keyup event, codeValue: " + codeValue);
});
registerBtn.addEventListener('click', c => {

    // // alerta.style.display = 'flex';
    // const title = document.getElementById('container__title-event');
    // if (title.value.length == 0) {
    //     title.style.border = '1.5px solid red';
    //     info.innerHTML = "Llenar campos Obligatorios";
    //     info.style.color = 'red';
    // } else {
    //     info.innerHTML = "Evento Registrado Satisfactoriamente!";
    //     info.style.color = '#0abb87';
    // }
    // const alerta = document.getElementById('alert-message');
    // alerta.style.transition = 'all 500ms ease';
    // alerta.style.transform = 'translateY(0%)';
    let name = 'Funca';
    let status = true;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'category_add.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.send(JSON.stringify(postData));

    xhr.addEventListener("load", onRequestHandler);
    xhr.send("nameCat=" + name + " &&statusCat=" + status);


});

closeBtn.addEventListener('click', c => {
    const alerta = document.getElementById('alert-message');
    // visibility: visible;
    alerta.style.transition = 'all 500ms ease';
    alerta.style.transform = 'translateY(-150%)';
});


function onRequestHandler() {
    const iconCorrect = document.getElementById("alert-message__correct");
    const iconIncorrect = document.getElementById("alert-message__incorrect");
    const alerta = document.getElementById('alert-message');

    if (title.value.length == 0) {
        title.style.border = '1.5px solid red';
        info.innerHTML = "Llenar campos Obligatorios";
        info.style.color = 'red';
    } else {
        info.innerHTML = "Evento Registrado Satisfactoriamente!";
        info.style.color = '#0abb87';
    }

    if (this.readyState == 4 && this.status == 200) {
        // const data = JSON.parse(this.response);
        const info = document.getElementById('alert-message__info');
        if (this.response == 0) {
            iconCorrect.style.display = "none";
            info.innerHTML = "No se pudo registrar los datos intentelo mas tarde";
        } else {
            iconIncorrect.style.display = "none";
            info.innerHTML = "Evento Registrado Satisfactoriamente!!!";
        }
        // console.log(this.response);
    }

    alerta.style.transition = 'all 500ms ease';
    alerta.style.transform = 'translateY(0%)';
}

/**
 * TODO:------------------------------------------------------------------------------
 * TODO: JS MODAL
 * TODO:------------------------------------------------------------------------------
 */

const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__container__icon-button");
const btnOpenModal = document.getElementById("container__images");

btnOpenModal.addEventListener('click', c => {
    openModal();
});

const openModal = () => {
    // modal.style.display = "flex";
    modal.classList.add("is-open");
    body.style.overflow = "hidden";
};

const closeModal = () => {
    // modal.style.display = "none";
    modal.classList.remove("is-open");
    body.style.overflow = "initial";
};

closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
    evt = evt || window.event;
    evt.keyCode === 27 ? closeModal() : false;
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

/**
 * * ---------------------------------- 
 * *    JS IMAGEN
 * * ----------------------------------
 */

const buttonLoadImage = document.getElementById("add-photo");
const buttonFileImage = document.getElementById("modal__container__third-box__image");
const container = document.querySelectorAll(".add-new-photo")

buttonLoadImage.addEventListener('click', c => {
    buttonFileImage.click()
});

buttonFileImage.addEventListener('change', c => {
    console.log(c.target.files);
    const file = c.target.files;
    const supportedImage = ["image/jpeg", "image/png", "image/gif"];
    if (supportedImage.indexOf(file[0].type) != -1) {
        const imgCodified = window.URL.createObjectURL(file[0]);
        const img = `<img src='${imgCodified}' >`;
        buttonLoadImage.innerHTML = img;
        console.log("El arhivo se subio correctamente")
    } else {
        console.log("Se encontraron archivos no válidos");
    }
});


/**
 * TODO:------------------------------------------------
 * TODO: LÓGICA
 * TODO:------------------------------------------------
 */
const URL = 'http://192.168.0.112:3000/publicaciones';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(this.response);
        console.log(data);
        const information = document.getElementById('alert-message__info');
        let template = '';
        data.forEach(publication => {
            template += `<h3>${publication.idpub}</h3>`;
        });
        information.innerHTML = template;
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${URL}`);
xhr.send();
