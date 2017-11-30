//password protection

var pwScreen = $("#pwScreen");
var pwInput = $("#pwInput");
var submitPW = $("#submitPW").on("click", checkPW);

//email validators
var emailValidation = '@';
var emailValidationTwo = '.';


//animates name placeholder
//on focus out, checks for input and returns to placeholder if no input
var nameInput = $("#nameInput").on("focusin", function() {

  $("#phName").addClass("phFocus");
}).on("focusout", function() {

  var nInputVal = nameInput.val();

  if ( nInputVal === undefined || nInputVal === '') {
    $("#phName").removeClass("phFocus");
    $("#nameValid").addClass("validDisplay");
  } else {
    $("#nameValid").removeClass("validDisplay");
  }
});

//animates email placeholder
var emailInput = $("#emailInput").on("focusin", function() {

  $("#phEmail").addClass("phFocus");
}).on("focusout", function() {

//email validation
  if ( emailInput.val() === undefined || emailInput.val() === '' ) {
    $("#phEmail").removeClass("phFocus");
    $("#emailValid").addClass("validDisplay");
  } else if ( !emailInput.val().includes(emailValidation) ) {
    $("#emailValid").addClass("validDisplay");
  } else if ( emailInput.val() != undefined || emailInput.val() != '' && emailInput.val().includes(emailValidation) && emailInput.val().includes(emailValidationTwo) ) {
      $("#emailValid").removeClass("validDisplay");
    }
  });

//animates message placeholder
var taInput = $("#taInput").on("focusin", function() {

  $("#phTA").addClass("phFocus");
}).on("focusout", function() {

  if (taInput.val() === undefined || taInput.val() === '') {
    $("#phTA").removeClass("phFocus");
  }
});

function checkPW() {

  if ( pwInput.val() === "coconutJazz" ) {

    pwScreen.css("display", "none");
  } else {

    $("#wrongPW").css("opacity", "1");
  }
}
