$( document ).ready(function() {
  //Home
    $( "#al-btn" ).on( "click", function() {
        $(this).toggleClass("is-active");
        $(".al-overlay").toggle();
      });

  // Plantas    
  $("#nav-plantas").on("click", ".btn-planta", function(event){
    event.preventDefault();
    $(".btn-planta").removeClass("activo");
    $(this).addClass("activo");
    var planta = $(this).data("planta");
    
    $("#plantas-cont").children("div").removeClass("activo");
    $("#plantas-cont").children("."+planta).addClass("activo");
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