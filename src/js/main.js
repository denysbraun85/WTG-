$(document).ready(function () {

    $(function () {
        $('.arrow_down').click(function () {
            $('html, body').animate({
                scrollTop: $('.wrap_arrow_down').offset().top
            }, 'slow');
            return false;
        });
    });

    $('.select_container select').select2({
        'allowClear': true
    });

    $(".js-select2").select2({
        closeOnSelect : false,
        placeholder : "Placeholder",
        allowHtml: true,
        allowClear: true,
        tags: true // создает новые опции на лету
    });

});