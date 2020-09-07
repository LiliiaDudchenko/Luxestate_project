//Scroll to anchor
$("a.scrollLink").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 500);
});

// Scroll down button

$(function () {
    $('#scroll-down').click(function () {
        $('html, body').animate({
            scrollTop: $(document).height() - $(window).height()
        }, 600);
        return false;
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 5500) {
            $('#scroll-down').hide();
        } else {
            $('#scroll-down').show();
        }
    });
});

// Mobile menu

$('.navigation').on('click', '.mobile-menu', function () {
    $(".navigation ul").slideToggle(400);
});

$(window).resize(function () {
    const windowWidth = $(window).width();
    console.log(windowWidth);
    if (windowWidth > 960) {
        $('.navigation ul').css({
            display: 'flex'
        })
    } else {
        $('.navigation ul').css({
            display: 'none'
        })
    }
});


// Counter

$(document).ready(function () {

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});

// Slider
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: true,
    speed: 400,
    loop: true,
    centerSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },

        1100: {
            slidesPerView: 3,
            spaceBetween: 10,
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
});