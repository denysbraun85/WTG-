$(document).ready(function () {

    $(function () {
        $('.arrow_down').click(function () {
            $('html, body').animate({
                scrollTop: $('.wrap_arrow_down').offset().top
            }, 'slow');
            return false;
        });
    });

    $('.language_select').select2({
        'allowClear': true
    });

    $(".js-select2").select2({
        closeOnSelect : false,
        allowHtml: true,
        allowClear: true,
        tags: true 
    });

    $(".js-select2").on('click', function(){
        if($('.select2-container--open .select2-dropdown--below').show){
            $('.select2-container--default, .select2-selection--multiple').is(":hover").css({
                '-webkit-box-shadow' : 'none',
                '-moz-box-shadow' : 'none',
                'box-shadow' : 'none'
            });
        }
    })
});


/*====================================================================
                         Toggle menu function
 =====================================================================*/
$('.navbar-toggle').on('click', function () {
    $(this).toggleClass('active-toggle');
    console.log('alert');
});
/*====================================================================
                                 End
 =====================================================================*/

