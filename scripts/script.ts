let menu = document.getElementsByClassName("header__rubrics-menu")[0] as HTMLElement;
let burger = document.getElementsByClassName("header__subnav-menu--burger-button")[0] as HTMLElement;
let TVmenu = document.getElementsByClassName("header__nav-menu__tv-menu")[0] as HTMLElement;
let menuButton = document.getElementsByClassName("header__nav-menu--menu-button")[0] as HTMLElement;
let carouselContainer = document.getElementsByClassName("carousel__wrapper__container__videos")[0] as HTMLElement;
let articles = document.querySelectorAll('.carousel__wrapper__container__videos__article') as NodeListOf<HTMLElement>;
let btnLeft = document.getElementsByClassName("carousel__wrapper__container__videos--button-left")[0] as HTMLElement;
let btnRight = document.getElementsByClassName("carousel__wrapper__container__videos--button-right")[0] as HTMLElement;
let submenu = document.getElementsByClassName("header__subnav-menu__rubrics__desktop--ul")[0] as HTMLElement;
let windowMenu = document.getElementsByClassName("header__subnav-menu__rubrics__desktop__menu--ul")[0] as HTMLElement;
let bannerImage = document.getElementsByClassName("main-banner")[0] as HTMLElement;
let rightButtons = document.getElementsByClassName("header__subnav-menu--desktop__sport-and-live-wrapper")[0] as HTMLElement;
let desktopMenu = document.getElementsByClassName("header__subnav-menu__rubrics__desktop__menu--ul")[0] as HTMLElement;
let nextButton = document.getElementsByClassName("header__subnav-menu__rubrics__desktop--next")[0] as HTMLElement;
let counter: Number = 0;
let counterTV: Number = 0;
let counterMenu: Number = 0;
let scrollStep = 375;
let scrollAmount = 0;


burger.addEventListener("click", function(){
    if (counter == 0){
        menu.style.display = "block";
        if (counterTV == 1){
            TVmenu.style.display = "none";
        counterTV = 0;
        }
        
        counter = 1;
    } else {
        menu.style.display = "none";
        counter = 0;
    }
})
menuButton.addEventListener("click", function(){
    if (counterTV == 0){
        if (counter == 1){
            menu.style.display = "none";
        counter = 0;
        }
        if (counterMenu == 1){
            desktopMenu.style.display = "none";
            counterMenu = 0
        }
        TVmenu.style.display = "block";
        counterTV = 1;
    } else {
        TVmenu.style.display = "none";
        
        counterTV = 0;
    }
})
nextButton.addEventListener("click", function{
    if (counterMenu == 0){
        desktopMenu.style.display = "block";
        if (counterTV == 1){
            TVmenu.style.display = "none";
            counterTV = 0;
        }
        counterMenu = 1
    }else{
        desktopMenu.style.display = "none";
        counterMenu = 0
    }
})


const updateScrollStep = () => {
    if (window.innerWidth < 570) {
        scrollStep = 257;
    } else {
        scrollStep = 375;
    }
};

const scrollRight = () => {
    updateScrollStep()
    if (scrollAmount <= (articles.length * scrollStep) - carouselContainer.clientWidth) {
        scrollAmount += scrollStep;
        carouselContainer.scroll({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
};

const scrollLeft = () => {
    updateScrollStep()
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

window.addEventListener('resize', function{
    let allSubnavMenu = submenu.scrollWidth + rightButtons.scrollWidth;
    let allwindowMenu = bannerImage.clientWidth - submenu.scrollWidth - rightButtons.scrollWidth;
    console.log(allSubnavMenu)
    console.log(bannerImage.clientWidth)
    if (allSubnavMenu == bannerImage.clientWidth){
        submenu.children[submenu.children.length - 3].classList.add("header__rubrics-menu__desktop__menu--element");
        submenu.children[submenu.children.length - 3].classList.remove("header__rubrics-menu__desktop--element");
        windowMenu.insertBefore(submenu.children[submenu.children.length - 3], windowMenu.children[0]);
        
//menu posunout left - element.width
    
    }else if (windowMenu.children[0].children[0].offsetWidth == allwindowMenu){
        windowMenu.children[0].classList.remove("header__rubrics-menu__desktop__menu--element");
        windowMenu.children[0].classList.add("header__rubrics-menu__desktop--element");
        submenu.insertBefore(windowMenu.children[0], submenu.children[submenu.children.length - 3]);
    }
}
);

