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

lists.click(function() {
    let chapter = $(this).nthParent(2).attr("num");
    let project = $(this).attr("numProject");
    console.log(project)
    $("#ImgProjects").attr('src', 'images/projects/c' + chapter + '/p' + project + '/Img_01.jpg')
});

$.fn.nthParent = function(n){
    var p = this;
    for(var i=0;i<n;i++)
        p = p.parent();
    return p;
}