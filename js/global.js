$(function () {

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

    $('.block-detail-slider__carousel.is-nodots').slick({
        infinite: true,
        dots: false,
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

    $('.block-detail-slider__carousel.is-dots ').slick({
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

})

$(function () {
    $(document).foundation();


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

    var itemsHeader =  $('.header-slider__menu-item')

    itemsHeader.hover(function () {
            $(this).children('a').css({
                opacity: 0.0,
                visibility: "visible"
            })
                .animate({opacity: 1}, 500);
            return false;
        },
        function(){
            $(this).children('a').animate({opacity: 0}, 200).css({
                visibility: "hidden"
            })
                ;
            return false;
        }
    );

    itemsHeader.each(function () {
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

    /** Active Tab Height*/
    function activeTabHeigth(){


        var liHeigth = $('.tab-menu__list.is-opened li').outerHeight();


        $('.tab-menu__list:not(".is-opened")')
            .height(liHeigth * $('.tab-menu__list:not(".is-opened") li').length);


    }

    activeTabHeigth();
    $(window).resize(activeTabHeigth());


    $('.tab-menu__item a').on('click', function () {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });

    /** Active Tab Height END*/

    /**Check is block-products first*/

    $('.block-products').each(function () {

        if($(this).prev('.row').find('h1').length > 0){
            $(this).addClass('first');
        }

    });


    /**Check is block-products first END*/

    /** Ровняем стрелки по картинке в слайдерах*/

        function arrowSlider(){
            $('.slick-slider:not(".is-color-arrows")').each(function () {

                var $slider = $(this);
                var $li = $('.slick-current', $slider);
                var $item = ($li.find('a'));
                var $top = $item.height() / 2;
                var $distance =  $item.offset().top - $slider.offset().top;


                $('.slick-arrow', $slider).each(function () {
                    $(this).css('top', $top + $distance + 'px');
                });
            });
        }


    arrowSlider();
    $(window).resize(arrowSlider);


    /** Ровняем стрелки по картинке в слайдерах END*/



    /** Проставляем значения колонок по сетки в блоке some-columns*/
    var blockSomeColumns = $('.block-some-columns');
    var count = blockSomeColumns.children('.row').children('.columns');


    blockSomeColumns.children('.row').each(function () {

        count = $(this).find('.columns');

        var num = 12 / count.length;

        var columnClass = blockSomeColumns.attr('data-col-class') + "-" + num;

        $(this).find('.columns').each(function () {
            $(this).addClass(columnClass);
        });

                if(count.length > 2){
                    count.eq(0).addClass('first');
                    count.eq(count.length - 1).addClass('last');
                }
                else{
                    count.addClass('is-only-one');
                }

    });


    /** Проставляем значения колонок по сетки в блоке some-columns END*/



    /** Выпадающее меню*/
    function menuPosition(){
        var secondItem = $('.top-menu__items-second-lvl');

        secondItem.each(function () {
            var secondWith = $(this).width();
            var firstWidth = $(this).parent().children("a").width();
            var leftPos = (firstWidth - secondWith) / 2;

            $(this).css('left', leftPos + 'px');

            $(this).parent().addClass('is-parent');
        });
    }


    menuPosition();
    $(window).resize(menuPosition);


    /** Выпадающее меню END*/

    /** Мобильное меню*/
    var secondItemMobile = $('.mobile-menu__items-second-lvl');

    secondItemMobile.each(function () {
        $(this).parent().addClass('is-parent');
    });


    var isParentMobile = $('.mobile-menu .is-parent');

    isParentMobile.children('span').on('click', function () {

        $(this).parent('li').toggleClass('active');
        $(this).parent().siblings().removeClass('active');
    });

    $('.top-menu .button-menu-lines').on('click', function () {
        $(this).toggleClass('is-close')
        $('.mobile-menu').toggleClass('is-opened')
    });

    $('.top-height .button-menu-lines').on('click', function () {
        $(this).toggleClass('is-close')
        $('.top-height__menu').toggleClass('is-opened')
    });



    /** Выпадающее меню END*/


    function searchMove() {
        var $view = $(window).width();
    if ($view <= 768){
        $('.search-bar').appendTo('.block-social-top').addClass('new')
    }
    else if($view > 768 && $('.search-bar-wrap .search-bar').length == 0){
        $('.search-bar.new').appendTo('.search-bar-wrap').removeClass('new')
    }
    }

    searchMove();
    $(window).resize(searchMove);

    /** Перемещение элементов DOM*/




});

jQuery(function ($) {
    function fix_size() {
        var images = $('.img-container img');
        images.each(setsize);

        function setsize() {
            var img = $(this),
                img_dom = img.get(0),
                container = img.parents('.img-container');
            if (img_dom.complete) {
                resize();
            } else img.one('load', resize);

            function resize() {
                if ((container.width() / container.height()) < (img_dom.width / img_dom.height)) {
                    img.width('100%');
                    img.height('auto');
                    return;
                }
                img.height('100%');
                img.width('auto');
            }
        }
    }
    $(window).on('resize', fix_size);
    fix_size();
});


