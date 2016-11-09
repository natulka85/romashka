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
            $(this).children('a').show('slow');
            return false;
        },
        function(){
            $(this).children('a').hide('slow');
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


