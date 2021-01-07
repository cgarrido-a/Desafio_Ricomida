$(function() {
  $(function() {
    $('[data-toggle="tooltip"]').tooltip()
  });

  $(".recipe-titles").dblclick(function() {
    $(this).css("color", "red");
  });

  $(".title-card-1").on("click", function() {
    $("#card-1").toggle();
  });

  $(".title-card-2").on("click", function() {
    $("#card-2").toggle();
  });

  $(".title-card-3").on("click", function() {
    $("#card-3").toggle();
  });

  $("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente...");
  })
});
