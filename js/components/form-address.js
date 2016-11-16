$(function () {

    var formAddress =  $('.form-address');
    var inputType = $('input[type="textarea"]');

    formAddress.find(inputType).parent().parent(formField)
        .on('mouseover', function () {

            $(this).find($label).css({
                'display': 'none'
            });

        });

    formAddress.find(inputType).parent().parent(formField)
        .on('mouseout', function () {

            if($(this).find('input, textarea').val() == '') {

                $(this).find($label).css({
                    'display': 'block'
                });
                $('input').blur();
                $(formErrorText).text('');

            }

        });
});
