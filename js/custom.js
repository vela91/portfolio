/*global $, window*/

$(function () {
  "use strict";

  var win = $(window),
    htmlBody = $("html, body"),
    scrollToTop = $(".scroll-top"),
    navBar = $(".navbar"),
    progressCheck = false,
    factsCheck = false;

  /*========== Loading  ==========*/
  $(".preloader")
    .delay(200)
    .fadeOut(700, function () {
      $(this).remove();
    });

  /*========== Mobile Menu  ==========*/
  $(".navbar .menu-toggle").on("click", function () {
    navBar.toggleClass("menu-active");
  });

  /*========== Typed  ==========*/
  $(".home p span").typed({
    strings: ["Developer.", "Freelacer."],
    cursorChar: "",
    typeSpeed: 90,
    loop: true,
    backSpeed: 30,
  });

  /*========== Smooth Scroll  ==========*/
  $(".navbar .navbar-nav > li:not('.nav-brand') > a").on("click", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  /*========== Start Portfolio Trigger Filterizr Js  ==========*/
  $("#control li").on("click", function () {
    $(this).addClass("active").siblings("li").removeClass("active");
  });
  // The Filterizr
  $("#filtr-container").filterizr({
    animationDuration: 0.4,
  });

  /*========== Start Magnigic Popup Js ==========*/
  if ($(".portfolio-content .item")[0]) {
    $(".portfolio-content .item").magnificPopup({
      delegate: ".icon-img",
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }

  /*========== Owl Carousel Js Testimonial  ==========*/
  $(".testimonials .owl-carousel").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 500,
    margin: 30,
    loop: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      991: {
        items: 2,
      },
    },
  });

  /*========== Owl Carousel Js Blog  ==========*/
  // $(".blog .owl-carousel").owlCarousel({
  //   items: 2,
  //   autoplay: true,
  //   smartSpeed: 500,
  //   margin: 30,
  //   loop: true,
  //   autoplayHoverPause: true,
  //   responsiveClass: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     991: {
  //       items: 2,
  //     },
  //   },
  // });

  /*========== Ajax Contact Form  ==========*/
  $(".contact-form").on("submit", function () {
    var myForm = $(this),
      data = {};

    myForm.find("[name]").each(function () {
      var that = $(this),
        name = that.attr("name"),
        value = that.val();

      data[name] = value;
    });

    $.ajax({
      url: myForm.attr("action"),
      type: myForm.attr("method"),
      data: data,
      success: function (response) {
        if (response == "success") {
          $(".contact-form").find(".form-message").addClass("success");
          $(".form-message span").text("Message Sent!");
        } else {
          $(".contact-form").find(".form-message").addClass("error");
          $(".form-message span").text("Error Sending!");
        }
      },
    });

    return false;
  });
});
