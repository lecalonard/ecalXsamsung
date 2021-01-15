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


// PAGE PROJECTS - Change sources


let lists = $(".itemNav ul li");
let btnLeft = $(".leftBTN");
let btnRight = $(".rightBTN");
let chapter = 1;
let project = 1;

lists.click(function () {
    chapter = $(this).nthParent(2).attr("num");
    project = $(this).attr("numProject");
    console.log(project)
    $("#ImgProjects").attr('src', 'images/projects/c' + chapter + '/p' + project + '/Img_01.jpg')
});

let Counter = 1;

btnLeft.click(function () {
    console.log("Back");
    if (Counter <= 1) {
        Counter = 3;
    } else {
        Counter -= 1;
    }
    $("#ImgProjects").attr('src', 'images/projects/c' + chapter + '/p' + project + '/Img_0' + Counter + '.jpg');
});

btnRight.click(function () {
    console.log("Next");
    if (Counter >= 3) {
        Counter = 1;
    } else {
        Counter += 1;
    }
    $("#ImgProjects").attr('src', 'images/projects/c' + chapter + '/p' + project + '/Img_0' + Counter + '.jpg');
});

$.fn.nthParent = function (n) {
    var p = this;
    for (var i = 0; i < n; i++)
        p = p.parent();
    return p;
}
