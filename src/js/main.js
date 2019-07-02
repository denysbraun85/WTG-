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
/*====================================================================
                                 Select 2
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
                                 End
 =====================================================================*/

/*====================================================================
                         Toggle menu function
 =====================================================================*/
$('.nav-bar-toggle').on('click', function () {
    $(this).toggleClass('active-toggle');
});
/*====================================================================
                                 End
 =====================================================================*/

/*====================================================================
                         Parallax functions
 =====================================================================*/
// Parallax Services
$('.parallax-services').parallax({
    imageSrc: '../img/background/bg-services.jpg'
});

// Parallax Count
var  parallaxBg = document.getElementById('parallax-bg');
var parallaxInstance = new Parallax(parallaxBg);

// Parallax Discount
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
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
                         Counter function
 =====================================================================*/
var a = 0;
$(window).on('scroll', function() {
    var oTop = $('.count-container').offset().top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() > oTop) {
        $('.value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum) + " " + "+");
                    },
                    complete: function() {
                        $this.text(this.countNum + " " + "+");
                        //alert('finished');
                    }
                });
        });
        a = 1;
    }
});
/*====================================================================
                                   END
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

/*====================================================================
                        Якийсь говнокод Дені =Р
 =====================================================================*/
$(function(){
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
    $sendBtn.on('click', function(e) {
        $iWrapper.css('color', '#006aff');
        $iWrapper.addClass('icon-wrapper-animation');
        $sendBtn.addClass('clicked');
        $('body').css('overflow-x', 'hidden')
        $i1.delay(300);
        $i1.fadeTo(300, 0);
        $i2.delay(300);
        $i2.fadeTo(300, 1);
    });
    $sendBtn.on(animationEvent(), function(e) {
        if (e.originalEvent.animationName == 'input-shadow') {
            $sendBtn.removeClass('clicked');
        }
    });
    $iWrapper.on(animationEvent(), function(e) {
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
                                 End
 =====================================================================*/

/*====================================================================
                        Scroll Down Menu Fix
 =====================================================================*/
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".main-header").addClass("scroll-down-menu");
            $(".logo-box").css("max-width", "80px");
            $(".nav-bar-toggle").addClass("scroll-down-active");
        } else {
            $(".main-header").removeClass("scroll-down-menu");
            $(".logo-box").css("max-width", "110px");
            $(".nav-bar-toggle").removeClass("scroll-down-active");
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
    // $(this).toggleClass('fix-btn');
    // $("body").toggleClass("fixed");
    // $("body").toggleClass("fix-btn");
});
/*====================================================================
                                 End
 =====================================================================*/

/*====================================================================
                             Main Menu Dropdown list
 =====================================================================*/
$('.link').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $ul = $(this).next();
    if (!$ul.hasClass('dropdown-menu-active')) {
        $ul.addClass('dropdown-menu-active');
    } else {
        $ul.removeClass('dropdown-menu-active');
    }
});
// Close the dropdown if the user clicks outside of it
$(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".link").length === 0) {
        $(this).next().toggleClass("dropdown-menu-active");
    }
});
/*====================================================================
                                 End
 =====================================================================*/

/*====================================================================
                             Scroll Spy
 =====================================================================*/
$(document).ready(function () {
    $(document).ready(function () {
        $('body').scrollspy({
            target: ".navigation",
            offset: 50
        });
        $("#navigation a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        });
    });
});
/*====================================================================
                                 End
 =====================================================================*/

/*====================================================================
                          Vertical Timeline
 =====================================================================*/
// $(function () {
//     window.sr = ScrollReveal();
//     if ($(window).width() < 768) {
//         if ($('.timeline-content').hasClass('js--fadeInLeft')) {
//             $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
//         }
//         sr.reveal('.js--fadeInRight', {
//             origin: 'right',
//             distance: '300px',
//             easing: 'ease-in-out',
//             duration: 800
//         });
//     } else {
//         sr.reveal('.js--fadeInLeft', {
//             origin: 'left',
//             distance: '300px',
//             easing: 'ease-in-out',
//             duration: 800
//         });
//         sr.reveal('.js--fadeInRight', {
//             origin: 'right',
//             distance: '300px',
//             easing: 'ease-in-out',
//             duration: 800
//         });
//     }
//     sr.reveal('.js--fadeInLeft', {
//         origin: 'left',
//         distance: '300px',
//         easing: 'ease-in-out',
//         duration: 800
//     });
//     sr.reveal('.js--fadeInRight', {
//         origin: 'right',
//         distance: '300px',
//         easing: 'ease-in-out',
//         duration: 800
//     });
// });
/*====================================================================
                                 End
 =====================================================================*/