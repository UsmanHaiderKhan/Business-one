﻿console.log("usman");


$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav2 = $(".navbar-brand");
        $nav2.toggleClass('scrolled', $(this).scrollTop() > $nav2.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav3 = $(".navbar-nav");
        $nav3.toggleClass('scrolled', $(this).scrollTop() > $nav3.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".navbar-light .navbar-nav .nav-link");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".logo1");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav4 = $(".navbar-toggler");
        $nav4.toggleClass('scrolled', $(this).scrollTop() > $nav4.height());
    });
});



/*================== Read More Text ==================*/
//"<div class='mt-30 animated slideInLeft' style='text-align:right; margin-bottom: 150px;>" +
//    "<a href = '#' class='scroll btn banner-btn'>KNOW MORE</a>" +
//    "</div>";
$(function () {
    var showChar = 250;
    var moretext = "KNOW MORE";
    var lesstext = " KNOW LESS";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-content"><span>' + hide_content +
                '</span><a href="" class="morelink btn banner-btn mt-30" style="display:block;float:right;margin-top:50px;margin-bottom:200px;">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelink").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
$(function () {
    var showChar = 250;
    var moretext = "READ MORE";
    var lesstext = " READ LESS";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-content"><span>' + hide_content +
                '</span><a href="" class="morelinkss btn read-btn mt-30" style="display:block;margin-top:50px;">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinkss").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
//Custom

var i = 0;

function read() {
    if (!i) {
        document.getElementById('more').style.display = "inline";
        document.getElementById('dots').style.display = "none";
        document.getElementById('read').innerHTML = "Read Less";
        i = 1;
    } else {
        document.getElementById('more').style.display = "none";
        document.getElementById('dots').style.display = "inline";
        document.getElementById('read').innerHTML = "Read More";
        i = 0;
    }
}


/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 5,
        showItems: 5

    });

});
$(function () {
    $('a').smoothScroll();
});
/*======================= Owl Carousel =======================*/
//$(document).ready(function () {
//    $("#testimonial-slider").owlCarousel({
//        items: 1,
//        itemsDesktop: [1000, 1],
//        itemsDesktopSmall: [979, 1],
//        itemsTablet: [768, 1],
//        pagination: false,
//        navigation: true,
//        navigationText: ["", ""],
//        slideSpeed: 1000,
//        autoPlay: true
//    });
//});
