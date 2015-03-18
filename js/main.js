var $btnExpand = $('.btn-expand');
var $panel = $('.panel');

$btnExpand.on('click', function () {
    $panel.toggleClass('js-panel-expand'); 
});

var $btnShowHide = $('.btn-show-hide');
var $blowfish = $('.blowfish');

var $btnMove = $('.btn-move');
var $blowfishblue = $('.blowfishblue');

var $btnBounce = $('.btn-bounce');
var $blowfishgreen = $('.blowfishgreen');

$btnShowHide.on('click', function () {
    $blowfish.toggleClass('js-show-hide'); 
});

$btnMove.on('click', function () {
    $blowfishblue.toggleClass('js-move'); 
});

$btnBounce.on('click', function () {
    $blowfishgreen.addClass('js-circle-bounce'); 
});

$blowfishgreen.on ('webkitAnimationEnd animationend', function () {
    $blowfishgreen.removeClass('js-circle-bounce');
});