$(document).ready(function() {

    AOS.init({
        disable: 'mobile',
        duration: 1000,
    });
    let hamburger = $(".hamburger");
    let navbar = $(".navbar");
    let close = $(".close");
    let sectionThreeChild = Array.from($(".section-three__wrapper .child"));
    let animate = false;
    let windowHeight = $(window).scrollTop();


    // $(window).scroll(() => {
    //     var wScroll = $(this).scrollTop();
    //     console.log(wScroll, $(".section-three").offset().top, $(".section-four").offset().top);

    //     if (wScroll > $('.section-three').offset().top - ($(window).height() / 3)) {
    //         $('.section-three__wrapper .card').each(function(i, value) {
    //             setTimeout(function() {
    //                 $(value).addClass('is-showing');
    //             }, 250 * (i + 1));
    //         });
    //     } else {
    //         // $('.section-three__wrapper .card').each(function(i, value) {
    //         //     $(value).removeClass('is-showing');
    //         // });
    //     }
    // });

    // navbar a animation
    $(".navbar a").click(function() {
        var $href = $(this).attr("href");
        $("html, body").stop().animate({
            scrollTop: $($href).offset().top - 100
        }, 1000);
        return false;
    });


    // mobile navigation
    hamburger.click(() => {
        navbar.addClass("show");
    });


    close.click(() => {
        navbar.removeClass("show");
    });

});