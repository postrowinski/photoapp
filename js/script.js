$(document).ready(function () {  
    
    function scrollTopAnimation(goTop) {
        $('html, body').animate({
            scrollTop: goTop
        }, 800);
    }
    
    $('.nav-links').click(function (e) {
        e.preventDefault();
        var getLink = $(this).attr('href'),
            goTop = $(getLink).offset().top;
        
        scrollTopAnimation(goTop);
    });
    
    $('.arrow-scroll-top').hide();
    
    //Show and hide navigation arrow after scrolling down
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.arrow-scroll-top').fadeIn();
        } else {
            $('.arrow-scroll-top').fadeOut();
        }
    });
    
    $('.arrow-scroll-top').click(function () {
        var goTopHTML = $('html').offset().top;
                          
        scrollTopAnimation(goTopHTML);
    });
});