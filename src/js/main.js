$(document).ready(function () {
    
    function makeImageResponsive() {
        var width = $(window).width();
        var img1 = $('.pic1');
        var img2 = $('.pic2');
        var img3 = $('.pic3');

        if (width <= 480) {
            img1.attr('src', 'img/ad001.png')
            img2.attr('src', 'img/ad002.png')
            img3.attr('src', 'img/ad003.png')
        } else if (width <= 800) {
            img1.attr('src', 'img/ad001-m.png')
            img2.attr('src', 'img/ad002-m.png')
            img3.attr('src', 'img/ad003-m.png')
        } else {
            img1.attr('src', 'img/ad001-l.png')
            img2.attr('src', 'img/ad002-l.png')
            img3.attr('src', 'img/ad003-l.png')
        }
    }

    $(window).on('resize load', makeImageResponsive);

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        // autoplayHoverPause: true,
        autoplayTimeout: 2000
    });

});