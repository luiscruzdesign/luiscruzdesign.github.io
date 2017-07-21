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
  });
  $("#confirma-consumo").click(function() {
    $("#consumo-medio").hide();
    $("#face-da-casa").show();
  });
  $("#face-norte, #face-sul").click(function() {
    $("#face-da-casa").hide();
    $("#contato").show();
  });
  $("#confirma-contato").click(function() {
    $("#contato").hide();
    $("#kit-energia-solar").show();
  });
  $("#confirma-logger, #rejeita-logger").click(function() {
    $("#kit-energia-solar").hide();
    $("#fim-calculadora").show();
  });
});
