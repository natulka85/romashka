$('.form-review .block-stars__star').on('click', function () {

    $(this).toggleClass('is-full');

    var starResult =  $(this).parent().next('.star-result');
    var placeBalls =  starResult.find('span');
    var quantStars = ($(this).parent().find('.is-full')).length;

    starResult.find('strong').text(quantStars);

    switch (quantStars){
        case 0:
            placeBalls.text(' баллов');
            break;

        case 1:
            placeBalls.text(' балл');
            break;

        case 5:
            placeBalls.text(' баллов');
            break;

        default:
            placeBalls.text(' балла');

    }
})
