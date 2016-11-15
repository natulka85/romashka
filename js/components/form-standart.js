$(function () {
    $('.form-standart').livequery(function () {
        var $context = $(this);
        var $form = $('form', $context);
        var $email = $('[data-fieldname="email"]', $context);
        var $formColor = $('.form-color');
        var $formWhite = $('.form-white');

        var pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;

        $('[data-fieldname="phone"]', $context).mask('+7 (999) 999-99-99', {placeholder: ' '});

        $($form).on('submit', function () {


            if($email.length > 0){

                if($email.val().search(pattern) !== 0 && $email.val() != ''){

                    $email.parent().next().find('.form-standart__error').text('Ошибка! Введен некорректный адрес email')
                }
            }

        })


        $formColor.find(".form-standart__field").on('mouseover', function () {
            $(this).find(".form-standart__label").css({
                'top': '-2rem',
                'color':'white'

            });
        });

        $formColor.find(".form-standart__field").on('mouseout', function () {

            if($(this).find('input, textarea').val() == '') {

                $(this).find(".form-standart__label").css({
                    'top': '0',
                    'color': '#6d6e71'
                });
                $('input').blur();
                $('.form-standart__error').text('');
            }
        });

        $formWhite.find(".form-standart__field").on('mouseover', function () {
            $(this).find(".form-standart__label").css({
               'display': 'none'

            });
        });

        $formWhite.find(".form-standart__field").on('mouseout', function () {

            if($(this).find('input, textarea').val() == '') {

                $(this).find(".form-standart__label").css({
                    'display': 'block'
                });
                $('input').blur();
                $('.form-standart__error').text('');
            }
        });

    });

});
