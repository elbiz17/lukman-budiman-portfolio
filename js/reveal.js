function reveal() {
   var reveals = document.querySelectorAll(".reveal");
 
   for (var i = 0; i < reveals.length; i++) {
     var windowHeight = window.innerHeight;
     var elementTop = reveals[i].getBoundingClientRect().top;
     var elementVisible = 150;
 
     if (elementTop < windowHeight - elementVisible) {
       reveals[i].classList.add("active");
     } else {
       reveals[i].classList.remove("passive");
     }
   }
 }
 
 window.addEventListener("scroll", reveal);
 reveal();








 //Get the button
// var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







// var btn = $('#button');

// $(window).scroll(function() {
//    if ($(window).scrollTop() > 500) {
//    btn.addClass('show');
// } else {
//    btn.removeClass('show');
// }
// });
//    btn.on('click', function(e) {
//    e.preventDefault();
//    $('html, body').animate({scrollTop:0}, '900');
// });

