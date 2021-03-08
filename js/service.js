const menuDel = document.querySelector(".service-menu__link--del"),
      descDel = document.querySelector(".service__desc--delivery"),
      menuGuar = document.querySelector(".service-menu__link--gt"),
      descGuar = document.querySelector(".service__desc--guarantee"),
      menuCred = document.querySelector(".service-menu__link--cred"),
      descCred = document.querySelector(".service__desc--credit");

menuDel.addEventListener('click', function (evt) {
    evt.preventDefault();
    descDel.classList.add("service__desc--active");
    descGuar.classList.remove("service__desc--active");
    descCred.classList.remove("service__desc--active");
 });

menuGuar.addEventListener('click', function (evt) {
    evt.preventDefault();
    descGuar.classList.add("service__desc--active");
    descDel.classList.remove("service__desc--active");
    descCred.classList.remove("service__desc--active");
 });

menuCred.addEventListener('click', function (evt) {
    evt.preventDefault();
    descCred.classList.add("service__desc--active");
    descDel.classList.remove("service__desc--active");
    descGuar.classList.remove("service__desc--active");
 });
