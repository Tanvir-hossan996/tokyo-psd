$(document).ready(function () {

    "use strict";


    //smooth scroll and active menu button code
    var html_body = $('html, body');
    $('.navbar .navbar-nav .nav-item .nav-link').on('click', function () {
        //for active menu button
        $('.navbar .navbar-nav .nav-item .nav-link').removeClass("active");
        $(this).addClass("active");
        //smooth scroll on menu click
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });


    //    active nav-bar

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 400) {

            $(".navbar").addClass("active-nav")
        } else {

            $(".navbar").removeClass("active-nav");
        }

        if (scrolling > 450) {

            $(".scroll-btn").fadeIn(1000);
        } else {

            $(".scroll-btn").fadeOut(1000);
        }
    })

    //    scroll button

    $(".scroll-btn").on("click", function () {

        $("html,body").animate({

            scrollTop: "0px",
        }, 1500)

    });

    //    menu icon toggler

    $(".navbar .navbar-toggler").on("click", function () {

        $(".navbar .navbar-toggler span").toggleClass("fas fa-times");

    });



    //    venobox 

    $('.venobox').venobox({

        spinner: "wave",
        spinColor: "#af3349"
    });




});


//form validation

//  variable decler

var name = document.getElementById("name");

var nameErr = document.getElementById("nameErr");

//submit err function

function subm() {

    if (name.value == "") {

        name.style.border = "1px dashed #801111";
        nameErr.innerHTML = "Please Enter Your Name";
        name.focus();
        return false;

    }
}
