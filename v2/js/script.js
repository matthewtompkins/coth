
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)};

 var screenSmall = 768;
 var ifMobile;
 var newScroll = 0;

 if ( winWidth <= screenSmall ) {
   ifMobile = true;
 } else {
   ifMobile = false;
 }

var winWidth = $(window).width();
var winHeight = $(window).height();

var titleDiv = $("#titleDiv");
var titleWidth = titleDiv.width();

var titleCol = $("#titleCol");
var noTitle = $("#noTitle");

var titleLeft = $(".titleLeft");
var titleRight = $(".titleRight");


$(document).ready( function() {

  titleCol.css("width", ( winWidth / 2 ) + titleWidth );
  noTitle.css("width", ( winWidth /2 ) - titleWidth );
});

window.addEventListener("scroll", function() {

  if ( !ifMobile ) {

    requestAnimationFrame(scrollAnimation);
  }
}, false);

function scrollAnimation() {

  var scrollTop = window.pageYOffset;

  if ( scrollTop > 100 ) {

    titleLeft.css("right", titleLeft.width() );
    titleRight.css("left", titleRight.width() );
    titleCol.css("right", titleCol.width() );
    noTitle.css("left", noTitle.width() );
  } else if ( scrollTop < 100 ) {

    titleLeft.css("right", "0");
    titleRight.css("left", "0");
    titleCol.css("right", "0");
    noTitle.css("left", "0");
  }

}
