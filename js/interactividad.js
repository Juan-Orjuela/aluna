$( document ).ready(function() {
  //Home
    $( "#al-btn" ).on( "click", function() {
        $(this).toggleClass("is-active");
        $(".al-overlay").toggle();
      });
  //Transiciones
  $("a").on("click", redirigir);

  function redirigir(e){
    e.preventDefault();
    var link = $(this).attr("href");
    var linkB = link.substr(0, link.indexOf('.'));
    
    var delay = 1200; // time in milliseconds
    $(".tr-overlay").addClass(linkB).show(600);
     
    setTimeout(function(){
     window.location = link;
    },delay);
    
   }

});