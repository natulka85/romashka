/** top header slider*/
$('.custom-checkbox').on('change', function () {

    $('.header-slider__item').each(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        }
        else {
            $(this).addClass('active')
        }
    });
});

var itemsHeader = $('.header-slider__menu-item')

itemsHeader.hover(function () {
        $(this).children('a').css({
            opacity: 0.0,
            visibility: "visible"
        })
            .animate({opacity: 1}, 500);
        return false;
    },
    function () {
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
    var imgWidth = $('.header-slider__items').width();
    var imgHeight = $('.header-slider__items').height();
    var left = (x / imgWidth * 100) + '%';
    var top = (y / imgHeight * 100) + '%';

    $(this).css({
        'left': left,
        'top': top
    });


});


/** top header slider END*/