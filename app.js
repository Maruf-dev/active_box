$(function() {
    let header = $("#header");
    let intro = $("#intro");
    let introH =  intro.innerHeight() ;
    let scrollPos = $(window).scsrollTop() ;

    $(window).on("scroll", function() {
        scrollPos = $(this).scsrollTop();

        if( scrollPos > introH ) {
            header.addclass("fixed");

        } else {
            header.removeClass("fixed");
        }
        
    });


    



    header.addclass("fixed");

});