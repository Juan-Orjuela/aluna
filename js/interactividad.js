$( document ).ready(function() {
  //Home
    $( "#al-btn" ).on( "click", function() {
        $(this).toggleClass("is-active");
        $(".al-overlay").toggle();
      });
  //Proyecto
  $('#al-py-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});