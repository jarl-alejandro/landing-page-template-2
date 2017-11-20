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
    const changed = "hello" + 304201;
    var hello = 21849;

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