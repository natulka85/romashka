$(function () {

    $('.tab-menu-page__item a, .tab-menu__item a').on('click', function () {
        var id = $(this).attr('href');
        var height = $(id).next().outerHeight();

        $(id).next().outerHeight(height);
        $(this).parent().parent().next().height(height);

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

    });

});
