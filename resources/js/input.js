$(function () {

    // Initialize integers
    $('.integer-field-type input').each(function () {
        $(this).spinner({
            min: $(this).data('min'),
            max: $(this).data('max'),
            step: $(this).data('step')
        });
    });
});
