var menu = document.getElementsByClassName("header__rubrics-menu")[0];
var burger = document.getElementsByClassName("header__subnav-menu--burger-button")[0];
var TVmenu = document.getElementsByClassName("header__nav-menu__tv-menu")[0];
var menuButton = document.getElementsByClassName("header__nav-menu--menu-button")[0];
var carouselContainer = document.getElementsByClassName("carousel__wrapper__container__videos")[0];
var articles = document.querySelectorAll('.carousel__wrapper__container__videos__article');
var btnLeft = document.getElementsByClassName("carousel__wrapper__container__videos--button-left")[0];
var btnRight = document.getElementsByClassName("carousel__wrapper__container__videos--button-right")[0];
var submenu = document.getElementsByClassName("header__subnav-menu__rubrics__desktop--ul")[0];
var windowMenu = document.getElementsByClassName("header__subnav-menu__rubrics__desktop__menu--ul")[0];
var bannerImage = document.getElementsByClassName("main-banner")[0];
var rightButtons = document.getElementsByClassName("header__subnav-menu--desktop__sport-and-live-wrapper")[0];
var desktopMenu = document.getElementsByClassName("header__subnav-menu__rubrics__desktop__menu--ul")[0];
var nextButton = document.getElementsByClassName("header__subnav-menu__rubrics__desktop--next")[0];
var counter = 0;
var counterTV = 0;
var counterMenu = 0;
var scrollStep = 375;
var scrollAmount = 0;
burger.addEventListener("click", function () {
    if (counter == 0) {
        menu.style.display = "block";
        if (counterTV == 1) {
            TVmenu.style.display = "none";
            counterTV = 0;
        }
        counter = 1;
    }
    else {
        menu.style.display = "none";
        counter = 0;
    }
});
menuButton.addEventListener("click", function () {
    if (counterTV == 0) {
        if (counter == 1) {
            menu.style.display = "none";
            counter = 0;
        }
        if (counterMenu == 1) {
            desktopMenu.style.visibility = "hidden";
            counterMenu = 0;
        }
        TVmenu.style.display = "block";
        counterTV = 1;
    }
    else {
        TVmenu.style.display = "none";
        counterTV = 0;
    }
});
nextButton.addEventListener("click", function () {
    if (counterMenu == 0) {
        desktopMenu.style.visibility = "visible";
        if (counterTV == 1) {
            TVmenu.style.display = "none";
            counterTV = 0;
        }
        counterMenu = 1;
    }
    else {
        desktopMenu.style.visibility = "hidden";
        counterMenu = 0;
    }
});
var updateScrollStep = function () {
    if (window.innerWidth < 570) {
        scrollStep = 257;
    }
    else {
        scrollStep = 375;
    }
};
var scrollRight = function () {
    updateScrollStep();
    if (scrollAmount <= (articles.length * scrollStep) - carouselContainer.clientWidth) {
        scrollAmount += scrollStep;
        carouselContainer.scroll({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
};
var scrollLeft = function () {
    updateScrollStep();
    if (scrollAmount > 0) {
        scrollAmount -= scrollStep;
        carouselContainer.scroll({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
};
btnRight.addEventListener('click', scrollRight);
btnLeft.addEventListener('click', scrollLeft);
window.addEventListener('resize', function () {
    var allSubnavMenu = submenu.scrollWidth + rightButtons.scrollWidth;
    var allwindowMenu = bannerImage.clientWidth - submenu.scrollWidth - rightButtons.scrollWidth;
    console.log(windowMenu.children[0].children[0].offsetWidth);
    console.log(allwindowMenu);
    if (allSubnavMenu == bannerImage.clientWidth) {
        submenu.children[submenu.children.length - 2].classList.add("header__rubrics-menu__desktop__menu--element");
        submenu.children[submenu.children.length - 2].classList.remove("header__rubrics-menu__desktop--element");
        windowMenu.insertBefore(submenu.children[submenu.children.length - 2], windowMenu.children[0]);
    }
    else if (windowMenu.children[0].children[0].offsetWidth <= allwindowMenu) {
        windowMenu.children[0].classList.remove("header__rubrics-menu__desktop__menu--element");
        windowMenu.children[0].classList.add("header__rubrics-menu__desktop--element");
        submenu.insertBefore(windowMenu.children[0], submenu.children[submenu.children.length - 2]);
    }
});
