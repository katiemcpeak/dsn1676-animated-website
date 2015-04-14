var $btnExpand = $('.btn-expand');
var $panel = $('.panel');

$btnExpand.on('click', function () {
    $panel.toggleClass('js-panel-expand'); 
});

var $btnShowHide = $('.btn-show-hide');
var $blowFish = $('.blowfish');

var $btnRotate = $('.btn-rotate');
var $blowFishBlue = $('.blowfishblue');

var $btnRotateLeft = $('.btn-rotate2');
var $blowFishGreen = $('.blowfishgreen');

$btnShowHide.on('click', function () {
    $blowFish.toggleClass('js-show-hide'); 
});

$btnRotate.on('click', function () {
    $blowFishBlue.toggleClass('js-rotate'); 
});

$btnRotateLeft.on('click', function () {
    $blowFishGreen.toggleClass('js-rotate-left'); 
});

$('.scrolldown').localScroll();

$('.scrollup').localScroll();

$('.about').localScroll();

$('.oceanography').localScroll();

$('.species').localScroll();
