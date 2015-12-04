// source/javascripts/all.js
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){

    $(window).on("scroll",function(){
        console.log($(this).scrollTop());
    });
        

     /* MENU RESPONSIVE */   

     $("#nav__icon").click(function(e){
        e.preventDefault();
        $("body").toggleClass("with--sidebar")
     });

    /* ACCUEIL GAUCHE */

    $(function() {

                            $("#img5").delay(2000).animate({top:"-1000px" }, 1500);
                                $("#img5").queue(function(){
                                        $("#img4").animate({"bottom":($(window).height()/2-400)}, 1500,"linear").delay(2000).animate({top: "-1000px"}, 1500 );
                                            $("#img4").queue(function(){
                                                $("#img3").animate({"bottom":($(window).height()/2-400)}, 1500,"linear").delay(2000).animate({top: "-1000px"}, 1500 );
                                                    $("#img3").queue(function(){
                                                        $ ("#img2").animate({"bottom":($(window).height()/2-400)}, 1500,"linear").delay(2000).animate({top: "-1000px"}, 1500 );
                                                             $("#img2").queue(function(){
                                                                $("#img1").animate({"bottom":($(window).height()/2-400)}, 1500,"linear").delay(2000);
                                                                    
                                                                    
                                                        
                                                    });
                                                });
                                            });
                                        });
    });




    /* ACCUEIL DROITE */
    $(function() {
        

    $("#img10").delay(2000).animate({bottom:"-1000px" }, 1500);
        $("#img10").queue(function(){
                $("#img9").animate({"top":($(window).height()/2-400)}, 1500,"linear").delay(2000).animate({top: "1500px"}, 1500 );
                    $("#img9").queue(function(){
                        $("#img8").animate({"top":($(window).height()/2-400)}, 1500,"linear").delay(2000).animate({top: "1500px"}, 1500 );
                            $("#img8").queue(function(){
                                $ ("#img7").animate({"top":($(window).height()/2-400)}, 1500,"linear").delay(2000).animate({top: "1500px"}, 1500 );
                                     $("#img7").queue(function(){
                                        $("#img6").animate({"top":($(window).height()/2-400)}, 1500,"linear").delay(2000);
                                        
                                
                            });
                        });
                    });
                });             
    });

    /* LOADER */

    $(window).load(function() {
        $(".loader").fadeOut("1000");
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

        else {
            if ($(window).scrollTop() > 2200 && $(window).scrollTop() < 2250) {
                $frise_bas.drawsvg('animate');
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


    /* ----------------  */

    /*----------------
    Formulaire_contact
    ------------------*/

            


});
