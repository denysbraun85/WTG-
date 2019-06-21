$(document).ready(function () {

    /*====================================================================
                                 Script for change SVG color
 =====================================================================*/


    $(function changeSVG() {
        $('img.svg_color').each(function () {
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            $.get(imgURL, function (data) {
                var $svg = $(data).find('svg');
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }
                $svg = $svg.removeAttr('xmlns:a');
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }
                $img.replaceWith($svg);
            }, 'xml');

        });
    });


    /*====================================================================
                                     End
     =====================================================================*/


    $(function () {
        $('.arrow_down').on('click', function () {
            $('html, body').animate({
                scrollTop: $('.wrap_arrow_down').offset().top + 80
            }, 'slow');
            return false;
        });
    });

    $('.language_select').select2({
        'allowClear': true
    });

    $(".js-select2").select2({
        closeOnSelect: false,
        allowHtml: true,
        allowClear: true,
        tags: true
    });

    $(".js-select2").on('click', function () {
        if ($('.select2-container--open .select2-dropdown--below').show) {
            $('.select2-container--default, .select2-selection--multiple').is(":hover").css({
                '-webkit-box-shadow': 'none',
                '-moz-box-shadow': 'none',
                'box-shadow': 'none'
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

/*====================================================================
                         Parallax functions
 =====================================================================*/
$('.parallax-services').parallax({
    imageSrc: '../img/background/bg-services.jpg'
});
$('.parallax-reasons').parallax({
    imageSrc: '../img/background/reason-bg.jpg'
});
/*====================================================================
                                 End
 =====================================================================*/

/*====================================================================
                         Sliders functions
 =====================================================================*/
$('.feedback-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.manager-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 476,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
/*====================================================================
                                 End
 =====================================================================*/