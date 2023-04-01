// get header height (without border)
jQuery(window).scroll(function () {
  var sticky = jQuery("#myHeader"),
    scroll = jQuery(window).scrollTop();
  if (scroll >= 10) {
    sticky.addClass("sticky");
  } else {
    sticky.removeClass("sticky");
  }
});
jQuery(window).scroll(function () {
  var sticky = jQuery(".middle-wrapper"),
    scroll = jQuery(window).scrollTop();
  if (scroll >= 10) {
    sticky.addClass("middle-wrapper-sticky");
  } else {
    sticky.removeClass("middle-wrapper-sticky");
  }
});


$(window).on('load', function () {
    if(!$('.payment-confirmation-section').length) {
        // Read the cookie and if it's defined scroll to id
        var scroll = $.cookie('scroll');
        console.log(scroll);
        if(scroll){
            scrollToID(scroll, 1000);
            $.removeCookie('scroll', { path: '/' });
        }

        $('.js-anchor-link').click(function(e){
          e.preventDefault();

          var id = $(this).data('id');
          var href = $(this).attr('href');
              if(href === '#'){
                  console.log(id);
                  scrollToID(id, 1000);
              } else{
                  //console.log('yessss');
                  $.cookie('scroll', id, {path: "/"});
                  window.location.href = href;
              }
        });

        if ($(window).width() > 1200) {
            // scrollToID function
            function scrollToID(id, speed) {
                var obj = $('#' + id);
                console.log(obj);
                if(obj.length){
                  $('body, html').animate({
                        scrollTop: $(obj).offset().top - 100
                      }, 1000);
                 // $('html,body').animate({ scrollTop: targetOffset }, speed);
                }
                $.removeCookie('scroll', { path: '/' });
            }
        };
        if ($(window).width() < 1199) {
            // scrollToID function
            function scrollToID(id, speed) {
                var obj = $('#' + id);
                console.log(obj);
                if(obj.length){
                  $('body, html').animate({
                        scrollTop: $(obj).offset().top - 80
                      }, 1000);
                 // $('html,body').animate({ scrollTop: targetOffset }, speed);
                }
                $.removeCookie('scroll', { path: '/' });
            }
        };
    }
});

jQuery(window).on('scroll', function(){
    jQuery('#top-section').waypoint(function() {
              jQuery('.navigation li').removeClass('current-menu-item');
              jQuery(".navigation li#section0").addClass("current-menu-item");
    }, { offset:200 });
    jQuery('#how_we_can_help_section').waypoint(function() {
    		  jQuery('.navigation li').removeClass('current-menu-item');
    		  jQuery(".navigation li#section1").addClass("current-menu-item");
    }, { offset:200 });
    jQuery('#ocaml_development_section').waypoint(function() {
    		  jQuery('.navigation li').removeClass('current-menu-item');
    		  jQuery(".navigation li#section2").addClass("current-menu-item");
    }, { offset: 200 });
    jQuery('#our_experience_section').waypoint(function() {
        jQuery('.navigation li').removeClass('current-menu-item');
        jQuery(".navigation li#section3").addClass("current-menu-item");
    }, { offset: 200 });
    jQuery('#contact_section').waypoint(function() {
        jQuery('.navigation li').removeClass('current-menu-item');
        jQuery(".navigation li#section4").addClass("current-menu-item");
    }, { offset: 269 });
})

$(".js-anchor-link").click(function(){
  $("body").removeClass("mobile-menu");
});
// MOBILE MENU
$(document).ready(function() {
    $('.menu-bar').on('click', function() {
        $(this).toggleClass('in').parents('body').toggleClass('mobile-menu');
        $(this).next().toggleClass('in');
    });
    $('.mobile-scroll li.menu-item-has-children').on('click', function() {
        var aftercl = psuedoClick(this);
        var clickafter = psuedoClick(this).after;
        if (clickafter == true) {
            console.log($(aftercl));
            if (!$(this).hasClass('open')) {
                $(this).addClass('open');
                $(this).children('ul').addClass('in');
            } else {
                $(this).find('.sub-menu').removeClass('in');
                $(this).removeClass('open');
                $(this).find('li.open').removeClass('open');
            }
        }
        $('.sub-menu .sub-menu.in li.open').click(function() {
            $(this).removeClass('open');
            $(this).children('.sub-menu.in').removeClass('in');
        })
        console.log($(this).children('.sub-menu'));
    });

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass('main-nav')) {
            $('.main-nav').find('.in').removeClass('in');
            $('body').removeClass('mobile-menu');
        }
    });
});
function psuedoClick(parentElem) {

    var beforeClicked,
      afterClicked;

  var parentLeft = parseInt(parentElem.getBoundingClientRect().left, 10),
      parentTop = parseInt(parentElem.getBoundingClientRect().top, 10);

  var parentWidth = parseInt(window.getComputedStyle(parentElem).width, 10),
      parentHeight = parseInt(window.getComputedStyle(parentElem).height, 10);

  var before = window.getComputedStyle(parentElem, ':before');

  var beforeStart = parentLeft + (parseInt(before.getPropertyValue("left"), 10)),
      beforeEnd = beforeStart + parseInt(before.width, 10);

  var beforeYStart = parentTop + (parseInt(before.getPropertyValue("top"), 10)),
      beforeYEnd = beforeYStart + parseInt(before.height, 10);

  var after = window.getComputedStyle(parentElem, ':after');

  var afterStart = parentLeft + (parseInt(after.getPropertyValue("left"), 10)),
      afterEnd = afterStart + parseInt(after.width, 10);

  var afterYStart = parentTop + (parseInt(after.getPropertyValue("top"), 10)),
      afterYEnd = afterYStart + parseInt(after.height, 10);

  var mouseX = event.clientX,
      mouseY = event.clientY;

  beforeClicked = (mouseX >= beforeStart && mouseX <= beforeEnd && mouseY >= beforeYStart && mouseY <= beforeYEnd ? true : false);

  afterClicked = (mouseX >= afterStart && mouseX <= afterEnd && mouseY >= afterYStart && mouseY <= afterYEnd ? true : false);

  return {
    "before" : beforeClicked,
    "after"  : afterClicked

  };

}


var tl = new TimelineMax({
  paused:true,
  repeatDelay:0.1,
  repeat:-1,
  yoyo:true
});

tl

// animate the linear gradient
.staggerTo("#Livello_1 stop", 1, {
  stopColor:'#FF8775',
  cycle:{
    /* number of <stop> elements and ending value */
    stopColor: ['#5B51BC','#6153BA','#6A56B6','#6153BA','#775AB0','#855FAA','#9664A3','#A86A9B','#BB7192','#D17889','#E77F7F','#FF8775',]
  }
}, 0.2, 0)

// pre-record GSAP properties and values
.progress(1).progress(0)

// hammer time
.play();
