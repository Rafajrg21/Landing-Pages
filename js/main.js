var newNavClass = "menu-scrolled";

$('.main-body-content').scroll(function() {
    $('.menu').addClass(newNavClass);
});