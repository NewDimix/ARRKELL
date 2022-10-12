// START countdown timer
function countdown() {
  var element=document.getElementById('js-sec');
  if(!element){return;}

  var d = new Date();
  var x = new Date("25 May 2018 08:00");

  d.setTime(Date.parse(x));

  var days = Math.floor(-((+new Date - d) / 1000 / 60 / 60 / 24));
  var hours = Math.floor(-((+new Date - d) / 1000 / 60 / 60));
  var minutes = Math.floor(-((+new Date - d) / 1000 / 60));
  var seconds = (Math.floor(-((+new Date - d) / 1000))) - (minutes * 60);
  minutes = minutes - (hours * 60);
  hours = hours - (days * 24);

  if (days < 0) {
    days = "0";
    hours = "0";
    minutes = "0";
    seconds = "0";
  };

  if (days <= 9) days = "0" + days;
  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;

  if (document.layers) {
    document.layers.doc_time.document.write(seconds);
    document.layers.doc_time.document.write(minutes);
    document.layers.doc_time.document.write(hours);
    document.layers.doc_time.document.write(days);
    document.layers.doc_time.document.close();
  } else
    document.getElementById("js-sec").innerHTML = seconds;
    document.getElementById("js-min").innerHTML = minutes;
    document.getElementById("js-hours").innerHTML = hours;
    document.getElementById("js-days").innerHTML = days;

  setTimeout("countdown()", 1000);
};

countdown();
// END countdown timer


$("#DateCountdown").TimeCircles({
    "animation": "smooth",
    "bg_width": 1,
    "fg_width": 0.08333333333333333,
    "circle_bg_color": "#60686F",
    "time": {
        "Days": {
            "text": "Дни",
            "color": "#e56305",
            "show": true
        },
        "Hours": {
            "text": "Часы",
            "color": "#e56305",
            "show": true
        },
        "Minutes": {
            "text": "Минуты",
            "color": "#e56305",
            "show": true
        },
        "Seconds": {
            "text": "Секунды",
            "color": "#e56305",
            "show": true
        }
    }
});



$(window).on('load', function () {
  // START preloader
  $preloader = $('.js-loader'),
  $loader = $preloader.find('.loader__img');
  $loader.fadeOut();
  $preloader.delay(0).fadeOut('slow');
  // END preloader



  // START header height
  function header() {
    var headerMinHeight = parseInt($(".js-header").css("padding-top")) + parseInt($(".js-header").css("padding-bottom")) + $('.js-header-row').height() + $('.js-header-content').outerHeight(true);
    $('.js-header').css('min-height', headerMinHeight + 'px');
    var headerHeight = ($('.js-header').height() - $('.js-header-row').height() - $('.js-header-content').outerHeight(true)) / 2;

    if (headerHeight > 5) {
      $('.js-header-row').css('margin-bottom', headerHeight + 'px');
    }
  };
  header();
  $(window).resize(function() {
    header();
  });
  // END header height



  // START menu nav
//  $('.js-menu-btn').click(function (event) {
//    event.stopPropagation();
//    $('.js-menu-btn').toggleClass('open');
//  });
//
//  $(document).mouseup(function (e) {
//    var container = $('.js-menu li');
//    if (container.has(e.target).length === 0) {
//      $('.js-menu-content > li span + ul').slideUp();
//      $('.js-menu-content > li span').removeClass('open');
//      $('.js-menu-content > li').removeClass('active');
//      $('.js-menu-content > li:first-child').addClass('active');
//    }
//    container = $('.js-menu');
//    if (container.has(e.target).length === 0) {
//      if ($(window).width() < '480') {
//        $('.js-menu-content').slideUp();
//        $('.js-menu-btn').removeClass('open');
//      }
//    }
//  });
//
//  $(function () {
//    $.myfn = function (li) {
//      $(li + ' > span').on('click', function () {
//        var thisContent = $(this).siblings('ul');
//        $(li + ' span + ul').not(thisContent).slideUp();
//        $(this).siblings('ul').slideToggle();
//
//        $(li + ' span').not(this).removeClass('open');
//        $(this).toggleClass('open');
//
//        $(li).not(this).removeClass('active');
//        $(this).parent().toggleClass('active');
//      });
//    };
//
//    $.myfn('.js-menu-content > li');
//  });
  // END menu nav


    function Menu() {
        this.body = $('body');
        this.body.append('<div class="menu__bg js-menu-bg"></div>');
        this.body.append('<div class="menu__border js-menu-border"></div>');

        this.headerMenu = $('.js-header-menu');
        this.menu = $('.js-menu');
        this.item = $('.js-menu-item');
        this.btn = $('.js-menu-btn');
        this.content = $('.js-menu-content');
        this.bg = $('.js-menu-bg');
        this.border = $('.js-menu-border');
        this.page = $('.js-page');

        var menu = this;

        this.toggle = function() {
            menu.btn.toggleClass('open');
            menu.content.toggleClass('open');
            menu.page.toggleClass('page_menu-open');
            menu.bg.fadeToggle(300);
            if ($(window).outerWidth(true) < '600') {
                menu.border.toggleClass('menu__border_open');
            }
        }

        this.moveBlock = function() {
            if ($(window).outerWidth(true) < '600') {
                if ($(menu.body).children(menu.menu).length == 0) {
                    return;
                } else {
                    menu.body.append(menu.menu);
                }
            } else {
                if ($(menu.headerMenu).children(menu.menu).length != 0) {
                    return;
                } else {
                    menu.headerMenu.append(menu.menu);
                }
            }
        }

        menu.moveBlock();

        menu.btn.click(function (event) {
            menu.toggle();
        });

        menu.item.click(function (event) {
            menu.toggle();
        });

        menu.bg.click(function (event) {
            menu.toggle();
        });

        $(window).resize(function() {
            menu.moveBlock();

            if ($(window).outerWidth(true) > '600') {
                menu.border.removeClass('menu__border_open');
                menu.btn.removeClass('open');
                menu.content.removeClass('open');
                menu.page.removeClass('page_menu-open');
                menu.bg.fadeOut(300);
            }
        });
    }

    var menu = new Menu();



  // START smooth scrolling
  $(".js-menu").on("click",".js-menu-scroll", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 500);
  });

  $(".js-footer-menu").on("click",".js-menu-scroll", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 500);
  });

  $(".js-header-content").on("click",".js-consultation-btn", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 500);
  });
  // END smooth scrolling



  // START slick
//  $('.js-roadmap-slider').slick({
//    dots: true,
//    infinite: false,
//    fade: true,
//    speed: 700,
//    dotsClass: "roadmap__dots",
//    arrows: true,
//    slidesToShow: 1,
//    adaptiveHeight: true,
//    prevArrow: '<button type="button" class="roadmap__arrows roadmap__arrows_prev"><span>Previous</span></button>',
//    nextArrow: '<button type="button" class="roadmap__arrows roadmap__arrows_next"><span>Next</span></button>',
//    responsive: [
//      {
//        breakpoint: 820,
//        settings: {
//          fade: false
//        }
//      }
//    ]
//  });
  // END slick



  // START jquery.validate
//  $(".js-registration-form").validate({
//    errorPlacement: function(error, element) {
//      element.parent().append(error);
//    },
//    rules: {
//      nickname: {
//        regexp: /^[a-zA-Z0-9]+$/
//      },
//      email: {
//        regexp: /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.+@.+\..+)$/
//      },
//      password: {
//        regexp: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/
//      },
//      repeatpassword: {
//        equalTo: '#password',
//        regexp: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/
//      }
//    },
//    messages: {
//      nickname: {
//        regexp: "Nickname может содержать только латинские буквы или цифры и быть не более двадцати символов в длину"
//      },
//      email: {
//        regexp: "E-MAIL должен быть в формате name@domain.com"
//      },
//      password: {
//        regexp: "Пароль должен содержать минимум: 8 символов, одну цифру, одну букву в верхнем регистре и одну в нижнем"
//      },
//      repeatpassword: {
//        equalTo: "Пароли должны совпадать, повторите ввод",
//        regexp: "Пароли должны совпадать, повторите ввод"
//      }
//    }
//  });
//
//  $(".js-login-form").validate({
//    rules: {
//      email: {
//        regexp: /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.+@.+\..+)$/
//      },
//      password: {
//        regexp: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/
//      }
//    },
//    messages: {
//      email: {
//        regexp: "E-MAIL должен быть в формате name@domain.com"
//      },
//      password: {
//        regexp: "Пароль должен содержать минимум: 8 символов, одну цифру, одну букву в верхнем регистре и одну в нижнем"
//      }
//    }
//  });
//
//  $(".js-forgot-form").validate({
//    rules: {
//      email: {
//        regexp: /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.+@.+\..+)$/
//      }
//    },
//    messages: {
//      email: {
//        regexp: "E-MAIL должен быть в формате name@domain.com"
//      }
//    }
//  });
//
//  $.validator.addMethod('regexp', function(value, element, params) {
//    var expression = new RegExp(params);
//    return this.optional(element) || expression.test(value);
//  });
//
//  jQuery.extend(jQuery.validator.messages, {
//    required: "Это поле является обязательным для заполнения",
//    remote: "Please fix this field.",
//    email: "E-MAIL должен быть в формате name@domain.com",
//    url: "Please enter a valid URL.",
//    date: "Please enter a valid date.",
//    dateISO: "Please enter a valid date (ISO).",
//    number: "Please enter a valid number.",
//    digits: "Please enter only digits.",
//    creditcard: "Please enter a valid credit card number.",
//    equalTo: "Please enter the same value again.",
//    accept: "Please enter a value with a valid extension.",
//    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
//    minlength: jQuery.validator.format("Please enter at least {0} characters."),
//    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
//    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
//    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
//    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
//  });
  // END jquery.validate



  // START youtube-load
//  $(function() {
//    $(".js-youtube").each(function() {
//      $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
//      $(this).append($('<div/>', {'class': 'slider-videos__play'}));
//
//      $(document).delegate('#'+this.id, 'click', function() {
//        var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&enablejsapi=1";
//        if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
//        var iframe = $('<iframe/>', {'id': this.id, 'class': 'youtube', 'frameborder': '0', 'allowfullscreen': 'allowfullscreen', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })
//        $(this).replaceWith(iframe);
//      });
//    });
//  });
//
//  window.addEventListener("resize", function() {
//    var height = $('.js-youtube-wrap').height();
//    var width = $('.js-youtube-wrap').width();
//    $('iframe').css('height', height);
//    $('iframe').css('width', width);
//  }, false);
  // END youtube-load



  // START stop youtube video
//  $('.js-youtube-wrap').click(function() {
//    if ($(".js-youtube-wrap iframe").is(".youtube")) {
//      var id = $('.js-youtube-wrap iframe').attr('id');
//      var bgi = 'background-image: url(http://i.ytimg.com/vi/' + id + '/sddefault.jpg';
//      var div = $('<div></div', {'id': id, 'class': 'slider-videos__youtube js-youtube', 'style': bgi});
//      $('.js-youtube-wrap iframe').after(div);
//      var divplay = $('<div></div', {'class': 'slider-videos__play'});
//      $('.js-youtube').append(divplay);
//      $(".js-youtube-wrap iframe").remove();
//    };
//  });
//
//  $(document).on('click', '.js-youtube-stop', function(){
//    jQuery("iframe").each(function() {
//      jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
//    });
//  });
//
//  $('.js-videos-slider').on('swipe', function(event, slick, direction){
//    jQuery("iframe").each(function() {
//      jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
//    });
//  });
  // END stop youtube video



  // START mCustomScrollbar
  $(".js-services2-text").mCustomScrollbar({
    documentTouchScroll: true,
    theme: 'dark'
  });

  $(".js-team-text").mCustomScrollbar({
    documentTouchScroll: true,
    theme: 'dark'
  });
  // END mCustomScrollbar



  // START mCustomScrollbar
//  new WOW().init();
  // END mCustomScrollbar


  (function($) {
    $(function() {
      $('.working3__tabs').on('click', 'li:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active').closest('.working3').find('.working3__item').hide().eq($(this).index()).fadeIn(200);
      });
    });
  })(jQuery);


  // START dotdotdot
  setTimeout(function () {
    $(".js-news-text").dotdotdot({});
  }, 1000);

  $(window).resize(function() {
    setTimeout(function () {
      $(".js-news-text").dotdotdot({});
    }, 1000);

    $(".js-team-text").mCustomScrollbar({
      documentTouchScroll: true,
      theme: 'dark'
    });
  });
  // END dotdotdot
});
