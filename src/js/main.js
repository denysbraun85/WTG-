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
$('.nav-bar-toggle').on('click', function () {
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
    responsive: [{
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
    responsive: [{
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

/*====================================================================
                         Video-background function
 =====================================================================*/
$('.video-bg').bgVideo({
    pauseAfter: 0,
    fadeIn: 0,
    showPausePlay: false
});
/*====================================================================
                                 End
 =====================================================================*/


$(() => {
    var $sendBtn = $('.animation_plane'),
        $iWrapper = $('.icon-wrapper'),
        $i1 = $('.icon-1'),
        $i2 = $('.icon-2');

    function animationEvent() {
        var t,
            el = document.createElement('fakeelement');

        var animations = {
            animation: 'animationend',
            OAnimation: 'oAnimationEnd',
            MozAnimation: 'animationend',
            WebkitAnimation: 'webkitAnimationEnd'
        };

        for (t in animations) {
            if (el.style[t] !== undefined) {
                return animations[t];
            }
        }
    }

    $sendBtn.on('click', e => {
        $iWrapper.css('color', '#006aff');
        $iWrapper.addClass('icon-wrapper-animation');
        $sendBtn.addClass('clicked');
        $('body').css('overflow-x', 'hidden')
        $i1.delay(300);
        $i1.fadeTo(300, 0);
        $i2.delay(300);
        $i2.fadeTo(300, 1);
    });

    $sendBtn.on(animationEvent(), e => {
        if (e.originalEvent.animationName == 'input-shadow') {
            $sendBtn.removeClass('clicked');
        }
    });

    $iWrapper.on(animationEvent(), e => {
        if (e.originalEvent.animationName == 'icon-animation') {
            $iWrapper.removeClass('icon-wrapper-animation');
            setTimeout(reset, 5000);
        }
    });

    function reset() {
        $i1.fadeTo(250, 1);
        $i2.fadeTo(250, 0);
        $iWrapper.css('color', '#006aff');
        $('body').css('overflow-x', 'auto')
    }
}); // end of document ready
/*====================================================================
                        Scroll Down Menu Fix
 =====================================================================*/
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".main-header").addClass("scroll-down-menu");
        } else {
            $(".main-header").removeClass("scroll-down-menu");
        }
    });
});
/*====================================================================
                                 End
 =====================================================================*/

/*====================================================================
                      Show And Hide Main Menu Modal
 =====================================================================*/
$('#menu-open-btn').on('click', function () {
    $('#main-menu-modal').toggleClass('menu-active');
    $('#menu-container').toggleClass('menu-active');
    // $(this).toggleClass('fix-btn');
    // $("body").toggleClass("fixed");
    // $("body").toggleClass("fix-btn");
});
/*====================================================================
                                 End
 =====================================================================*/

/*====================================================================
                      Mousemove background discount
 =====================================================================*/
$('.background_discount').mousemove(function (e) {
    var moveX = (e.pageX * -1 / 30);
    // var moveY = (e.pageY * -1 / 30);
    $(this).css('background-position', moveX + 'px ')
});
/*====================================================================
                                 End
 =====================================================================*/

/*====================================================================
                             Scroll Spy
 =====================================================================*/
$(document).ready(function(){
    $(document).ready(function(){
        $('body').scrollspy({target: ".navigation", offset: 50});
        $("#navigation a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
        });
    });
});
/*====================================================================
                                 End
 =====================================================================*/