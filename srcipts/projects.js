'use strict'

$(".itemNav:first-child ul").addClass("dropDown");

$(".itemNav h1").click(function () {
    $(".itemNav ul").removeClass("dropDown");
    $(this).parent().children("ul").addClass("dropDown");
})

$(".itemNav:first-child ul li:first-child").addClass("projectSelect");

$(".itemNav ul li").click(function () {
    $(".itemNav ul li").removeClass("projectSelect");
    $(this).addClass("projectSelect");
})