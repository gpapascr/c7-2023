jQuery(document).ready(function($){

    new WOW().init();

    var menu_open = false;
    $(".scroll, .scroll a").click(function(event){
        event.preventDefault();
        if ( menu_open ){
            $("#navbar").slideToggle("normal", function() {
                $("#btn_menu").removeClass("open");
                menu_open = false;
            } );
        }
        var target = $(hash).offset().top;
        target -= $("#page-header").height();
        $('html,body').animate({scrollTop: target}, 800);
        return false;
    });
    $(window).on('load',function(){
        var hash = $( location ).attr('hash');
        if(hash){
            var target = $(hash).offset().top;
            target -= $("#page-header").height();
            $('html,body').animate({scrollTop: target}, 'slow');
        }
    });
    $("#btn_menu").click(function(){
        $("#header-menu").stop(true).animate({'width': 'toggle'}, function() {
            if ( menu_open ){
                $("#btn_menu").removeClass("open");
            } else {
                $("#btn_menu").addClass("open");
            }
            menu_open = !menu_open;
        } );
    });

    function converter(M){
        var str="", str_as="";
        for(var i=0;i<M.length;i++){
            str_as = M.charCodeAt(i);
            str += String.fromCharCode(str_as + 1);
        }
        return str;
    }
    var ad = converter(String.fromCharCode(104,109,101,110,63,98,104,117,104,107)+String.fromCharCode(54,45,110,113,102));
    $(".toiawase").html("<a href=\"mai"+"lto:"+ad+"\">"+ad+"<\/a>");
    ad = converter(String.fromCharCode(105,96,109,104,98,44,96,99,117,110)+String.fromCharCode(98,96,98,120,63,105,96,109,104,98,45,110,113,102));
    $(".toiawase_janic").html("<a href=\"mai"+"lto:"+ad+"\">"+ad+"<\/a>");
    ad = converter(String.fromCharCode(102,54,44,49,47,49,50,63,114,99)+String.fromCharCode(102,114,44,105,96,111,96,109,45,109,100,115));
    $(".toiawase_sdgs-japan").html("<a href=\"mai"+"lto:"+ad+"\">"+ad+"<\/a>");

    function setTopMargin(){
        if ( $("body.page-template-page-home").length <= 0 ){
            $("#page-main").css("margin-top", $("#page-header").height() + 'px');
        } else {
            $("#page-body").css("margin-top", '-' + $("#page-header").height() + 'px');
            $("#secMV .mv-block .block-contents").css("padding-top", ($("#page-header").height() / 1.5) + 'px');
        }
    }
    function setHeader(){
        if ( $("body.page-template-page-home").length > 0 ){
            if ( $(this).scrollTop() < $("#secMV").outerHeight() ) {
                $("#page-header").removeClass('fixed');
            } else {
                $("#page-header").addClass('fixed');
            }
        }
    }
    setHeader();
    setTopMargin();
    $(window).on('resize', function() {
        setHeader();
        setTopMargin();
    });
    $(window).on( 'scroll', function () {
        setHeader();
        setTopMargin();
    });

    $(".faq-block .block-title").click(function(){
        $(this).next(".block-contents").slideToggle();
        if ( $(this).parents(".faq-block").hasClass("open") ){
            $(this).parents(".faq-block").removeClass("open");
        } else {
            $(this).parents(".faq-block").addClass("open");
        }
    });


    $(".committee-list .popup").magnificPopup({
        type: "inline",
        gallery: {
            enabled: true,
        }
    });
});
