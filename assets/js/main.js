
(function ($) {

        'use strict';
  
    var ig = {

        init: function () {
        ig.menu();
        ig.slider();
        ig.cookies();
        ig.form();
        },

        menu: function() {
            $('.nav__open').on('click', function () {
                if ($(window).width() < 1024) {
                    $('body').addClass('open-menu');
                    $('.nav__menu-wrap').addClass('active');
                    $('.overlay').fadeIn();
                }
            });
            $('.nav__close, .overlay').on('click', function () {
                $('body').removeClass('open-menu');
                $('.nav__menu-wrap').removeClass('active');
                $('.overlay').fadeOut();
            });
        },

        slider: function() {
            $('.slider').slick({
                arrows: false,
                dots: true
            });
        },
        cookies: function (){
            $('.cookies__close').on('click', function(){
                $('.cookies').removeClass('cookies-active');
            });
        },

        form: function() {
            $('.contact__form').validate()
        },
    };
  
    $(function () {
        ig.init();
    });
  
})(jQuery);
