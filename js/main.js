var $btnExpand = $('.btn-expand');
var $panel = $('.panel');
var $spinStar = $('.spinstar');

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
    $blowFish.toggleClass('blowfish'); 
});

$btnRotate.on('click', function () {
    $blowFishBlue.toggleClass('blowfishblue'); 
});

$btnRotateLeft.on('click', function () {
    $blowFishGreen.toggleClass('blowfishgreen'); 
});

$spinStar.on('click', function () {
    $spinStar.toggleClass('js-active');
});

$('.scrolldown').localScroll();

$('.scrollup').localScroll();

$('.about').localScroll();

$('.oceanography').localScroll();

$('.species').localScroll();
