let newNavClass = "menu-scrolled";

$('.main-body-content').scroll(function () {
    $('.menu').addClass(newNavClass);
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});