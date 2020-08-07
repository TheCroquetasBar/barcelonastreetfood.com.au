var $document = $(document.body);

$(function () {
  clickedButtons();
  responsiveNavBar();
});

function clickedButtons() {
  $('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });
}


function responsiveNavBar() {
  var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive bg-primary-color";
    } else {
      x.className = "topnav bg-primary-color";
    }
}