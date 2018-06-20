
(function( $ ) {
    'use strict';
})( jQuery );

$(document).ready(makeBubbles);

var winHt = $(window).height();

var main = $("#main");
var mainHt = main.height();

var hero = $("#hero");
var heroHt = hero.height();

var signUpHead = $("#signUpHead");
var headHt = signUpHead.outerHeight();
var chimpDiv = $("#chimpDiv").css("margin-top", "-" + headHt + 'px');
var heroHt = winHt - mainHt + headHt;

hero.css("height", heroHt);

var nav = $("#nav");

var contact = $("#contact");

var opContact = document.getElementById("opContact");
opContact.addEventListener("click", openContact);

var close = document.getElementById("close");
close.addEventListener("click", closeContact);

var contactLeft = $("#contactLeft");
var contactRight = $("#contactRight");

//Resize Listener

window.addEventListener("resize", function() {

  mainHt = main.height();
  main.height(mainHt);

  winHt = $(window).height();

  headHt = signUpHead.outerHeight();

  heroHt = winHt - mainHt + headHt;

  chimpDiv.css("margin-top", "-" + headHt + 'px');
});

//Scroll Listener

window.addEventListener("scroll", function() {

  var winTop = $(window).scrollTop();

  var navTop = nav.offset().top;

    if ( winTop >= navTop ) {

      var mainHt = main.height();
      main.css("height", mainHt);

      nav.removeClass("absNav")
         .addClass("fixNav")
    }

    if ( winTop <= mainHt - nav.outerHeight() ) {

      nav.removeClass("fixNav")
         .addClass("absNav");
    }
});

function makeBubbles() {

  var bubbleArr = [];
  var main = $("#main");

  for (i = 0; i < 10; i++) {

    var newDiv = $("<div></div>");
    newDiv.addClass("bubble");

    var ranSize = Math.floor( Math.random() * 40 );
    newDiv.height(ranSize);
    newDiv.width(ranSize);

    var ranPos = Math.floor( Math.random() * 100 );
    var posPerc = ranPos + '%';
    newDiv.css("left", posPerc);


    var ranDel = Math.floor( Math.random() * 12 + 3 );
    var delSec = ranDel + 's';
    var ranDur = ranDel + 2 + 's';
    newDiv.css("animation-delay", delSec);
    newDiv.css("animation-duration", ranDur);

    main.prepend(newDiv);
  }
}

function openContact() {

  contact.css("z-index", "40");

  setTimeout(function() {
    contactLeft.css("left", "0");
    contactRight.css("right", "0");
  },10);
}

function closeContact() {

  contactLeft.css("left", "-100%");
  contactRight.css("right", "-100%");

  setTimeout(function() {

    contact.css("z-index", "-1");
  }, 600);
}
