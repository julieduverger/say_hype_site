// source/javascripts/all.js
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(window).load(function(){
        $(".titreh2").addClass("slideInDown");
        $(".titreh3").addClass("slideInDown");
        $(".titreh4").addClass("fadeInDown");
        $(".titrehp").addClass("fadeInDown");
        $("#tittle_studio").addClass("slideInDown");
        $("#tittle_contact").addClass("slideInDown");
        $("#realisation_menu").addClass("fadeInRight");
        $("#lestudio_menu").addClass("fadeInRight2");
        $("#contact_menu").addClass("fadeInRight3");

        $.fn.typewriter = function(opt,callback) {
        var i=0;
        var typeone = function(self, text, content) {
                if (text.length > 0) {
                        i=i+1;
                        var next = text.match(/(\s*(<[^>]*>)?)*(&.*?;|.?)/)[0];
                        text = text.substr(next.length);
                        $(self).html(content+next);
                        setTimeout(function(){
                                typeone(self, text, content+next);
                        }, opt['delay']);
                        if(text.length==0) if (callback!=null) callback();
                }
        }
        this.each(function() {
                opt = opt || { 'delay': 125 };
                typeone(this, $(this).html(), '');
        });
        return this;
}

});

$(document).ready(function(){

  $("#realisation_menu").mouseenter(function() {
  $(".line_menu1").animate({"width":"90px"}, 800);
});
$("#realisation_menu").mouseleave(function() {
  $(".line_menu1").animate({"width":"1px"}, 300);
});
  $("#lestudio_menu").mouseenter(function() {
  $(".line_menu2").animate({"width":"90px"}, 800);
});
$("#lestudio_menu").mouseleave(function() {
  $(".line_menu2").animate({"width":"1px"}, 300);
});
  $("#contact_menu").mouseenter(function() {
  $(".line_menu3").animate({"width":"90px"}, 800);
});
$("#contact_menu").mouseleave(function() {
  $(".line_menu3").animate({"width":"1px"}, 300);
});

        $(window).on("scroll",function(){
            console.log($(this).scrollTop());
        });
            
         /* MENU RESPONSIVE */   

         $("#nav__icon").click(function(e){
            e.preventDefault();
            $("body").toggleClass("with--sidebar");
         })


        /*-------- 
        Frise haut 
        ---------*/
        var $frise_haut = $("#frise_haut").drawsvg({
                duration: 2000,
            });

        $(window).on("scroll",function(){

            
            if ($(window).width() < 1290) {
                if ($(window).scrollTop() > 215 && $(window).scrollTop() < 230) {
                    $frise_haut.drawsvg('animate');
                } 
            } 

            else {
                if ($(window).scrollTop() > 25 && $(window).scrollTop() < 50) {
                    $frise_haut.drawsvg('animate');
                } 
            } 
        });
            

        /*-------
        Frise bas
        ---------*/

        var $frise_bas = $("#frise_bas").drawsvg({
        	duration : 3000,
        	});

        $(window).on("scroll",function(){

            
            if ($(window).width() < 1290) {
                if ($(window).scrollTop() > 1650 && $(window).scrollTop() < 1680) {
                    $frise_bas.drawsvg('animate');
                } 
            } 

            else if ($(window).width() > 1290 && $(window).width() < 1450){
                 if ($(window).scrollTop() > 1800 && $(window).scrollTop() < 1830) {
                    $frise_bas.drawsvg('animate');
                } 
            }

            else {
                if ($(window).scrollTop() > 2180 && $(window).scrollTop() < 2230) {
                    $frise_bas.drawsvg('animate');
                } 
            } 
        });

         /*-------
        Frise bas soa
        ---------*/

        var $frise_bas1 = $("#frise_bas_soa1").drawsvg({
            duration : 3000,
            });

        $(window).on("scroll",function(){

            
            if ($(window).width() < 1290) {
                if ($(window).scrollTop() > 970 && $(window).scrollTop() < 1000) {
                    $frise_bas1.drawsvg('animate');
                } 
            } 

            else if ($(window).width() > 1290 && $(window).width() < 1450){
                 if ($(window).scrollTop() > 1140 && $(window).scrollTop() < 1150) {
                    $frise_bas1.drawsvg('animate');
                } 
            } 

            else if ($(window).width() > 1450 && $(window).width() < 1690){
                 if ($(window).scrollTop() > 950 && $(window).scrollTop() < 1000) {
                    $frise_bas1.drawsvg('animate');
                } 
            }

            else if ($(window).width() > 1690 && $(window).width() < 1950){
                 if ($(window).scrollTop() > 850 && $(window).scrollTop() < 880) {
                    $frise_bas1.drawsvg('animate');
                } 
            }               

            else {
                if ($(window).scrollTop() > 1320 && $(window).scrollTop() < 1350) {
                    $frise_bas1.drawsvg('animate');
                } 
            } 
        });

         /*-------
        Frise bas toietmoi
        ---------*/

            var $frise_bas2 = $("#frise_bas_toietmoi2").drawsvg({
            duration : 3000,
            });

        $(window).on("scroll",function(){

            
            if ($(window).width() < 1290) {
                if ($(window).scrollTop() > 970 && $(window).scrollTop() < 1000) {
                    $frise_bas.drawsvg('animate');
                } 
            } 

            else if ($(window).width() > 1290 && $(window).width() < 1450){
                 if ($(window).scrollTop() > 1310 && $(window).scrollTop() < 1330) {
                    $frise_bas2.drawsvg('animate');
                } 
            }        

            else {
                if ($(window).scrollTop() > 1320 && $(window).scrollTop() < 1350) {
                    $frise_bas2.drawsvg('animate');
                } 
            } 
        });

        /*--------------
        Frise_verticale
        ---------------*/
        var $frise_verticale = $("#frise_verticale").drawsvg({
        	duration : 2750,
        	});

        $(window).on("scroll",function(){

            
            if ($(window).width() < 1290) {
                if ($(window).scrollTop() > 850 && $(window).scrollTop() < 880) {
                    $frise_verticale.drawsvg('animate');
                } 
            } 

            else {
                if ($(window).scrollTop() > 800 && $(window).scrollTop() < 1100) {
                    $frise_verticale.drawsvg('animate');
                } 
            } 
        });

        /*--------------
        Frise_verticale1
        ---------------*/

        var $frise_verticale1 = $("#frise_verticale1").drawsvg({
        	duration : 2750,
        	});


        $(window).on("scroll",function(){

            
            if ($(window).width() < 1290) {
                if ($(window).scrollTop() > 1045 && $(window).scrollTop() < 1070) {
                    $frise_verticale1.drawsvg('animate');
                } 
            } 

            else {
                if ($(window).scrollTop() > 1300 && $(window).scrollTop() < 1400) {
                    $frise_verticale1.drawsvg('animate');
                } 
            } 
        });

        /*----------------------
        Frise_verticale_mindful
        -----------------------*/

        var $frise_verticale_mindful = $("#frise_verticale_mindful").drawsvg({
        	duration : 2750,
        	});
        $(window).on("scroll",function(){
            if ($(this).scrollTop() > 800 && $(this).scrollTop() < 1100) {
        $frise_verticale_mindful.drawsvg('animate');
        }

        });

        /*--------------
        Frise_soustitre
        ----------------*/

        var $svg = $("#frise_soustitre").drawsvg({
        	duration : 5000,
        	stagger: 500,
        	reverse: false,
        	});

        $svg.drawsvg('animate');

        /* ----------------  */

        /* Page Transition  */


          $(".animsition").animsition({
            inClass: 'fade-in',
            outClass: 'fade-out',
            inDuration: 1000,
            outDelay: 2000,
            outDuration: 1200,
            linkElement: '.animsition-link',
            // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
            loading: true,
            loadingParentElement: 'body', //animsition wrapper element
            loadingClass: 'animsition-loading',
            loadingInner: '', // e.g '<img src="loading.svg" />'
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: [ 'animation-duration', '-webkit-animation-duration'],
            // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
            overlay : false,
            overlayClass : 'animsition-overlay-slide',
            overlayParentElement : 'body',
            transition: function(url){ window.location.href = url; }
          });


        /*---------
        NAVIGATION
        -----------*/

        $(".navprojetgauche").hover(function() {
            $(this).toggleClass("nav_class1");
        });

        $(".navprojetdroit").hover(function() {
            $(this).toggleClass("nav_class1");
        });
});
