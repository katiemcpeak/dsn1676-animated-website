var $btnExpand = $('.btn-expand');
var $panel = $('.panel');
var $spinStar = $('.spinstar');
var $blowFish = $('.blowfish');
var $blowFishBlue = $('.blowfishblue');
var $blowFishGreen = $('.blowfishgreen');

$btnExpand.on('click', function () {
    $panel.toggleClass('js-panel-expand'); 
});

$btnShowHide.on('click', function () {
    $blowFish.toggleClass('js-show-hide'); 
});

$btnRotate.on('click', function () {
    $blowFishBlue.toggleClass('js-rotate'); 
});

$btnRotateLeft.on('click', function () {
    $blowFishGreen.toggleClass('js-rotate-left'); 
});

$spinStar.on('click', function () {
    $spinStar.toggleClass('js-active');
});

$('.scrolldown').localScroll();

$('.scrollup').localScroll();

$('.about').localScroll();

$('.oceanography').localScroll();

$('.species').localScroll();
