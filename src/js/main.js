$(document).ready(function () {

    $(function () {
        $('.arrow_down').click(function () {
            $('html, body').animate({
                scrollTop: $('.wrap_arrow_down').offset().top
            }, 'slow');
            return false;
        });
    });

    $('.search_select').select2();

});