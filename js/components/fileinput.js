$(function () {
    $('.inputfile__text').on('click', function () {
        $(this).next().click();
    });

    $('.btn-color:contains("Загрузить")').on('click', function () {
        $(this).prev().find('input[type="file"]').click();
    });


    $('input[type="file"]').on('change', function () {
        var $filename = ($(this).val().replace(/\\/g, '/').replace(/.*\//, ''));
        $(this).prev().text($filename);
    });

});