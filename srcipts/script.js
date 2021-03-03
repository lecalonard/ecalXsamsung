'use strict'

setTimeout(function () {
    $("#introVideo video").addClass("introVideoAnim");
}, 3000);

// Slider Images

let imgCount01 = 0;
let imgCount02 = 0;
let imgCount03 = 0;

imgSlider01();
imgSlider02();
imgSlider03();


function imgSlider01() {

    setInterval(function () {

        if (imgCount01 >= 3) {
            imgCount01 = 1;
        } else {
            imgCount01 += 1;
        }

        let imagesPages = $("#part1 div:nth-child(1) img");
        imagesPages.attr("src", "images/01/Img_01_0" + imgCount01 + ".png");

        setTimeout(function () {
            let imagesPages = $("#part1 div:nth-child(2) img:nth-child(1)");
            imagesPages.attr("src", "images/01/Img_02_0" + imgCount01 + ".png");

        }, 800)

        setTimeout(function () {
            let imagesPages = $("#part1 div:nth-child(2) img:nth-child(2)");
            imagesPages.attr("src", "images/01/Img_03_0" + imgCount01 + ".png");

        }, 1600)

    }, 5000);

}

function imgSlider02() {

    setInterval(function () {

        if (imgCount02 >= 3) {
            imgCount02 = 1;
        } else {
            imgCount02 += 1;
        }

        let imagesPages = $("#part2 div:nth-child(2) img");
        imagesPages.attr("src", "images/02/Img_03_0" + imgCount02 + ".png");


    }, 3000);

}

function imgSlider03() {

    setInterval(function () {

        if (imgCount03 >= 2) {
            imgCount03 = 1;
        } else {
            imgCount03 += 1;
        }

        let imagesPages = $("#part3 div:nth-child(1) img:nth-child(1)");
        imagesPages.attr("src", "images/03/Img_01_0" + imgCount03 + ".png");

        setTimeout(function () {
            let imagesPages = $("#part3 div:nth-child(1) img:last-child");
            imagesPages.attr("src", "images/03/Img_02_0" + imgCount03 + ".png");
        }, 800)
        
        setTimeout(function () {
            let imagesPages = $("#part3 div:nth-child(2) img:nth-child(1)");
            imagesPages.attr("src", "images/03/Img_03_0" + imgCount03 + ".png");
        }, 1600)
        
        setTimeout(function () {
            let imagesPages = $("#part3 div:nth-child(2) img:nth-child(2)");
            imagesPages.attr("src", "images/03/Img_04_0" + imgCount03 + ".png");
        }, 2400)

    }, 5000);

}


//Aparition on screen

(function () {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();
