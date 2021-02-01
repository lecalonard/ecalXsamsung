'use strict'

setTimeout(function () {
    $("#introVideo video").addClass("introVideoAnim");
}, 3000);

// Slider Images

let imgCount = 0;

setInterval(function () {
        
    if (imgCount >= 3) {
        imgCount = 1;
    } else {
        imgCount += 1;
    }
    
    let imagesPages = $("#part1 div:nth-child(2) img");
    imagesPages.attr("src", "images/01/Img_02_0" + imgCount + ".jpg");
    
}, 4000);


// Aparition on screen

//(function() {
//  var elements;
//  var windowHeight;
//
//  function init() {
//    elements = document.querySelectorAll('.hidden');
//    windowHeight = window.innerHeight;
//  }
//
//  function checkPosition() {
//    for (var i = 0; i < elements.length; i++) {
//      var element = elements[i];
//      var positionFromTop = elements[i].getBoundingClientRect().top;
//
//      if (positionFromTop - windowHeight <= 0) {
//        element.classList.add('fade-in-element');
//        element.classList.remove('hidden');
//      }
//    }
//  }
//
//  window.addEventListener('scroll', checkPosition);
//  window.addEventListener('resize', init);
//
//  init();
//  checkPosition();
//})();
