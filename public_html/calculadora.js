$( document ).ready(function() {
  $("#abre-seletor-cidade").click(function() {
    $("#geolocalizacao-cidade").hide();
    $("#seletor-cidade").show();
  });
  $("#estados").change(function() {
    $("#cidades").show();
  });
  $("#cidades").change(function() {
    $("#confirma-cidade-seletor").show();
  });
  $("#confirma-cidade-seletor, #confirma-cidade").click(function() {
    $("#localizacao").hide();
    $("#consumo-medio").show();
    $("#etapa-localizacao").removeClass("active");
    $("#etapa-consumo").addClass("active");
  });
  $("#confirma-consumo").click(function() {
    $("#consumo-medio").hide();
    $("#face-da-casa").show();
    $("#etapa-consumo").removeClass("active");
    $("#etapa-face").addClass("active");
  });
  $("#face-norte, #face-sul").click(function() {
    $("#face-da-casa").hide();
    $("#contato").show();
    $("#etapa-face").removeClass("active");
    $("#etapa-contato").addClass("active");
  });
  $("#confirma-contato").click(function() {
    $("#contato").hide();
    $("#kit-energia-solar").show();
    $("#etapa-contato").removeClass("active");
    $("#etapa-resultado").addClass("active");
  });
  $("#confirma-logger, #rejeita-logger").click(function() {
    $("#kit-energia-solar").hide();
    $("#fim-calculadora").show();
  });
});
