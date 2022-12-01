$(document).ready(() => {
    // Sliders

    // Hero-section
    $('.hero-slider__init').slick({
        prevArrow: $('.slider__nav_hero > .slider__nav-left'),
        nextArrow: $('.slider__nav_hero > .slider__nav-right'),
        responsive: [
            {
                breakpoint: 585,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ],
    });
    // Tariffs


    $('.tariffs__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slider__nav_tariffs > .slider__nav-left'),
        nextArrow: $('.slider__nav_tariffs > .slider__nav-right'),
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]

    });
    $('.tariffs__slider').slick('resize');

    $('.promo__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.slider__nav_promo > .slider__nav-left'),
        nextArrow: $('.slider__nav_promo > .slider__nav-right'),
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, ,
            {
                breakpoint: 585,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]

    });

    // Scroll animation
    function animatedBlocks() {
        $('.need-animate').each(function () {
            var scrollPosTop = $(window).scrollTop(), // позиция скролла, верх страницы
                blockPosTop = $(this).offset().top, // позиция блока (верх), который нужно анимировать
                blockPosBottom = blockPosTop + $(this).height(), // позиция блока (низ), который нужно анимировать
                windowHeight = $(window).height(), // высота окна браузера
                windowLineTop = scrollPosTop + (windowHeight * (1 / 8)), // верхняя граница окна браузера при пересечении которой анимируется блок
                windowsLineBottom = scrollPosTop + (windowHeight * (7 / 8)); // нижяя граница окна браузера при пересечении которой анимируется блок

            if (
                (windowLineTop <= blockPosBottom && windowLineTop > blockPosTop) // если верхняя часть экрана выше нижней границы блока, но не прошла блок полностью
                || (windowsLineBottom >= blockPosTop && windowsLineBottom < blockPosBottom) // если нижняя часть экрана дошла до верхней границы блока, но не прошла блок полностью
                || ((blockPosTop > windowLineTop && blockPosTop < windowsLineBottom) || (blockPosBottom > windowLineTop && blockPosBottom < windowsLineBottom)) // или блок по центру экрана
            ) {
                $(this).removeClass('need-animate').addClass('animated');
            }
        });
    }
    $(document).ready(function () {
        setTimeout(function () {
            animatedBlocks();
        }, 1000);
    });
    $(window).scroll(function () {
        animatedBlocks();
    });

    // burger
    $('.burger').on('click', () => {
        $('.burger, .header-main__nav_mobile').toggleClass('active');
    })

    $('[data-modal]').on('click', function () {
        $('#wrapper').toggleClass('active');
        $('.modal__' + $(this).data('modal')).addClass('active');
    });

    $(document).on('click', (event) => {
        if (event.target.id == 'wrapper') {
            $('#wrapper').removeClass('active');
            $('.modal').removeClass('active');
        }
    });

    setTimeout(() => {
        $('.pre-loader').addClass('disable');
    }, 500);

    $(window).scroll(() => {

        console.log($(window).scrollTop());
        if ($(window).scrollTop() > $('.nav_top').height()) {
            $('.header-main').addClass('sticky');
        } else {
            $('.header-main').removeClass('sticky');
        }
    });
});