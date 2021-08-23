$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
     
   
     $( ".card" ).hover(
     function() {
       $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
     }, function() {
       $(this).removeClass('shadow-lg');
     }
   );
     
   // document ready  
   });
   
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function showAlerts(){
  document.getElementById('bootstrap-alert').style.display = 'block';
  setTimeout(function(){document.getElementById('bootstrap-alert').style.display = 'none'}, 1700);
  
  //THIS IS JS ALERT
  alert('Hiện Thị Token');
}
var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
  offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  scrollDuration = 700;
  $('.revealedBox').each(function(i){ 

    var childrenSpan = $(this).children('span').length;
  
    $(this).addClass('childrenSpan-' + childrenSpan);  
  
    if($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight() ){ 
      $(this).addClass('revealedBox-in');       
    }   
  
  }); 
  
  $(window).scroll(function() { 
    $('.revealedBox').each(function(i){  
    if($(window).scrollTop() + $(window).height() > $(this).offset().top ){ 
      $(this).addClass('revealedBox-in');       
    }   
  }); 
    
  });