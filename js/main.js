!function(e){"use strict";var a=e("body");function t(){var a=e("#page-ajax-loaded");function t(){a.removeClass("fadeOutLeft closed"),a.show(),e("body").addClass("ajax-page-visible")}var o=e(".ajax-page-load").each((function(){if(o=e(this).attr("href"),location.hash==location.hash.split("/")[0]+"/"+o.substr(0,o.length-5)){var i=e(this).attr("href");return t(),a.load(i),!1}}));e(document).on("click","#ajax-page-close-button",(function(t){t.preventDefault(),e("#page-ajax-loaded").addClass("fadeOutLeft closed"),e("body").removeClass("ajax-page-visible"),setTimeout((function(){e("#page-ajax-loaded.closed").html(""),a.hide()}),500),location.hash=location.hash.split("/")[0]})).on("click",".ajax-page-load",(function(){var a=location.hash.split("/")[0]+"/"+e(this).attr("href").substr(0,e(this).attr("href").length-5);return location.hash=a,t(),!1}))}function o(){150<e(a).scrollTop()?e(".lmpixels-scroll-to-top").removeClass("hidden-btn"):e(".lmpixels-scroll-to-top").addClass("hidden-btn")}e((function(){e("#contact_form").validator(),e("#contact_form").on("submit",(function(a){if(!a.isDefaultPrevented())return e.ajax({type:"POST",url:"contact_form/contact_form.php",data:e(this).serialize(),success:function(a){var t="alert-"+a.type,o=a.message,i='<div class="alert '+t+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+o+"</div>";t&&o&&(e("#contact_form").find(".messages").html(i),e("#contact_form")[0].reset())}}),!1}))})),e(window).on("load",(function(){var a,t,o;e(".preloader").fadeOut(800,"linear"),a=e(window).width(),t="",o=e("#page_container").attr("data-animation"),(t=e(991<a?".page-container":".site-main")).addClass("animated "+o),e(".page-scroll").addClass("add-prespective"),t.addClass("transform3d"),setTimeout((function(){e(".page-scroll").removeClass("add-prespective"),t.removeClass("transform3d")}),1e3)})).on("hashchange",(function(e){location.hash&&t()})),e(document).on("ready",(function(){e(document).height(),e(document).width();e("body").on("mousemove",(function(a){a.pageX,e(document).width(),a.pageY,e(document).height();if(e(".page-container").hasClass("bg-move-effect"))e(".home-photo .hp-inner:not(.without-move), .lm-animated-bg");else e(".home-photo .hp-inner:not(.without-move)")})).scroll((function(){o()}));var i=e(".portfolio-grid"),s=e("#portfolio-gallery-grid");s.imagesLoaded((function(){s.masonry()})),i.imagesLoaded((function(){e(".portfolio-content").each((function(){e(this);var a=e(this).attr("id"),t=e("#"+a+" .portfolio-grid"),o=e("#"+a+" .portfolio-filters"),i=e("#"+a+" .portfolio-filters .filter");t&&(t.shuffle({speed:450,itemSelector:"figure"}),e(".site-auto-menu").on("click","a",(function(e){t.shuffle("update")})),o.on("click",".filter",(function(a){t.shuffle("update"),a.preventDefault(),i.parent().removeClass("active"),e(this).parent().addClass("active"),t.shuffle("shuffle",e(this).attr("data-group"))})))}))})),e(".portfolio-page-carousel").each((function(){e(this).imagesLoaded((function(){e(".portfolio-page-carousel").owlCarousel({smartSpeed:1200,items:1,loop:!0,dots:!0,nav:!0,navText:!1,autoHeight:!0,margin:10})}))}));var l,n=e(".blog-masonry");n.imagesLoaded((function(){n.masonry({itemSelector:".item",resize:!1})})),e(".menu-toggle").on("click",(function(){e(".site-nav").addClass("animate"),e(".site-nav").toggleClass("mobile-menu-hide")})),e(".text-rotation").owlCarousel({loop:!0,dots:!1,nav:!1,margin:10,items:1,autoplay:!0,autoplayHoverPause:!1,autoplayTimeout:3800,animateOut:"fadeOut",animateIn:"fadeIn"}),e(".testimonials.owl-carousel").owlCarousel({nav:!1,items:3,loop:!1,navText:!1,margin:25,responsive:{0:{items:1},480:{items:1},768:{items:2},1200:{items:2}}}),e(".clients.owl-carousel").imagesLoaded().owlCarousel({nav:!1,items:2,loop:!1,navText:!1,margin:10,autoHeight:!1,responsive:{0:{items:2},768:{items:4},1200:{items:6}}}),a.magnificPopup({fixedContentPos:!1,delegate:"a.lightbox",type:"image",removalDelay:300,mainClass:"mfp-fade",image:{titleSrc:"title",gallery:{enabled:!0}},iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title mfp-bottom-iframe-title"></div></div>',patterns:{youtube:{index:"youtube.com/",id:null,src:"%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"},callbacks:{markupParse:function(e,a,t){a.title=t.el.attr("title")}}}),e(".ajax-page-load-link").magnificPopup({type:"ajax",removalDelay:300,mainClass:"mfp-fade",gallery:{enabled:!0}}),e(".portfolio-page-wrapper .portfolio-grid").each((function(){e(this).magnificPopup({delegate:"a.gallery-lightbox",type:"image",gallery:{enabled:!0}})})),e(".form-control").val(""),e(".form-control").on("focusin",(function(){e(this).parent(".form-group").addClass("form-group-focus")})),e(".form-control").on("focusout",(function(){0===e(this).val().length&&e(this).parent(".form-group").removeClass("form-group-focus")})),e("body").append('<div id="page-ajax-loaded" class="page-portfolio-loaded animated fadeInLeft" style="display: none"><div class="preloader-portfolio"><div class="preloader-animation"><div class="preloader-spinner"></div></div></div></div>'),t(),e(".sidebar-toggle").on("click",(function(){e("#blog-sidebar").toggleClass("open"),e(this).toggleClass("open")})),e(".lmpixels-scroll-to-top").click((function(){return e("body,html").animate({scrollTop:0},400),!1})),e("#map").googleMap({zoom:16}),e("#map").addMarker({address:"S601 Townsend Street, San Francisco, California, USA"}),o(),l="",e(".skill-container").each((function(){var a=e(this).attr("data-value");if(101<=a&&(a="100"),void 0!==a){var t=e(this).attr("id");l+="#"+t+" .skill-percentage { width: "+a+"%; } "}})),e("head").append('<style data-styles="leven-theme-skills-css" type="text/css">'+l+"</style>")}))}(jQuery);