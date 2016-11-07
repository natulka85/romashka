$(function () {
    $(document).foundation();

    $('.certificates__carousel, .our-clients__carousel').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.success-story__carousel').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.top-slider__carousel').slick({
        infinite: true,
        dots: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


//equalheight - одинаковая высота колонок
//Пример списка элементов:
//var eqElement = ".cat_container > div, .home_news > div"
    var eqElement = ""
    $(window).load(function () {
        equalheight(eqElement);
    }).resize(function () {
        equalheight(eqElement);
    });

    /** swipebox*/

    $('.swipebox').swipebox({
        useCSS: true, // false will force the use of jQuery for animations
        useSVG: true, // false to force the use of png for buttons
        initialIndexOnArray: 0, // which image index to init when a array is passed
        hideCloseButtonOnMobile: false, // true will hide the close button on mobile devices
        removeBarsOnMobile: true, // false will show top bar on mobile devices
        hideBarsDelay: 3000, // delay before hiding bars on desktop
        videoMaxWidth: 1140, // videos max width
        beforeOpen: function () {
        }, // called before opening
        afterOpen: null, // called after opening
        afterClose: function () {
        }, // called after closing
        loopAtEnd: false // true will return to the first image after the last image is reached
    });


/** block-video */

    $('.button-play, .loupe').on('click', function () {
        $(this).siblings('.swipebox').click();
    })


    function backImg() {
        $(window).load(function () {
            var itemHeight = $('.block-video__item').height();
            var itemWidth = $('.block-video__item').width();
            var itemBg = $('.block-video__item-bg');

            itemBg.css({
                'width': itemWidth,
                'height': itemHeight
        });

        })

    }

    backImg();
    $(window).resize(backImg());

/** block-video END */

/** block-expirience*/

$(window).load(function () {
    $('.one-height').each(function () {
        var generalHeight = $(this).find('.g-height').height();

        $(this).find('.s-height').outerHeight(generalHeight);
        });
    });


/** block-expirience END*/

/** footer-main-menu*/
var footerMenu = $('.footer-main-menu__item');

footerMenu.on('mouseover', function () {
    $(this).addClass('active');
})

footerMenu.on('mouseout', function () {
    $(this).removeClass('active');
})
/** footer-main-menu END*/



/** top header slider*/
$('.custom-checkbox').on('change', function(){

    $('.header-slider__item').each(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }
        else{
            $(this).addClass('active')
        }
    });
});

    $('.header-slider__menu-item').hover(function () {
        $(this).children('a').show('slow');
            return false;
    },
    function(){
        $(this).children('a').hide('slow');
        return false;
    }
    );

    $('.header-slider__menu-item').each(function () {
        var x = $(this).attr('data-x');
        var y = $(this).attr('data-y');
        var imgWidth = 1560;
        var imgHeight = 580;
        var left = (x / imgWidth * 100) + '%';
        var top = (y / imgHeight * 100) + '%';

        $(this).css({
            'left' : left,
            'top' : top
        });


    });



/** top header slider END*/

})


