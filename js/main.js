
$(document).ready(function () {


    // MOBILE MENU ------------------- //
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.header__menu-mobile').toggleClass('open');
        $('body').toggleClass('bg-active');
    });
    // SUBMENU --- //
    $('.header__menu-mobile .submenu').click(function () {
        $(this).toggleClass('active');
        $(this).find('.submenu-dropdown').slideToggle();
    });
    // ----- === change header while scrolling === ----- //
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });

    // heroscreen slider ------------ //
    var swiper = new Swiper(".heroscreen__slider", {
        slidesPerView: 1,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 1800,
        },
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            // dynamicBullets: true,
        },
    })

    // pages-heroscreen__slider  ------------ //
    var swiper = new Swiper(".pages-heroscreen__slider", {
        slidesPerView: 1,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 1800,
        },
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            // dynamicBullets: true,
        },
    })

    // testimonials__slider  ------------ //
    var swiper = new Swiper(".testimonials__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1800,
        loop: true,
        autoplay: {
            delay: 1200,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    })
    // photos__slider  ------------ //
    var swiper = new Swiper(".photos__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 1800,
        loop: true,
        autoplay: {
            delay: 1200,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    })


    // articles tabs
    $('.tab').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.tab-body').removeClass('show').hide();
        $('.tab').removeClass('active-tab');
        $(this).addClass('active-tab');
        $('#' + dataClass).addClass('show').fadeIn(300);
        return false;
    });


    //  gallery ----------- //
    if ($('.fancygallery').length) {
        ['gallery', 'testimonials', 'photo'].forEach(function (type) {
            Fancybox.bind(`[data-fancybox="${type}"]`, {});
        });
    }

    // animation ---- //

    AOS.init({
        duration: 800,
        disable: 'phone',
        easing: 'ease-in-out',
        once: true,
    });

});