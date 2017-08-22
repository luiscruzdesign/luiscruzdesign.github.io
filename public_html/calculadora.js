$( document ).ready(function() {
  // variável para controle de setas de ida e volta
  var etapaAtual = '#etapa-localizacao';

  // funcao dos botoes de ida e volta
  $('#seta-anterior').click(function() {
    switch(etapaAtual) {
    case '#etapa-localizacao':
        break;
    case '#etapa-consumo':
        etapaAtual = '#etapa-localizacao';
        $(".slide").hide();
        $("#localizacao").show();
        $(".etapa-calculadora").removeClass("active");
        $("#etapa-localizacao").addClass("active");
        $("#seta-anterior").hide();
        break;
    case '#etapa-rede':
        etapaAtual = '#etapa-consumo';
        $(".slide").hide();
        $("#consumo-medio").show();
        $(".etapa-calculadora").removeClass("active");
        $("#etapa-consumo").addClass("active");
        break;
    case '#etapa-face':
        etapaAtual = '#etapa-rede';
        $(".slide").hide();
        $("#rede").show();
        $(".etapa-calculadora").removeClass("active");
        $("#etapa-rede").addClass("active");
        break;
    case '#etapa-telhado':
        etapaAtual = '#etapa-face';
        $(".slide").hide();
        $("#face-da-casa").show();
        $(".etapa-calculadora").removeClass("active");
        $("#etapa-face").addClass("active");
        break;
    case '#etapa-contato':
        etapaAtual = '#etapa-telhado';
        $(".slide").hide();
        $("#telhado").show();
        $(".etapa-calculadora").removeClass("active");
        $("#etapa-telhado").addClass("active");
        $("#seta-proxima").show();
        break;
    case '#etapa-resultado':
        $("#setas").hide();
        $(".etapa-calculadora:not('#etapa-resultado')").addClass("inactive");
        break;
    default:
    }
  });
  $('#seta-proxima').click(function() {
    console.log((etapaAtual));
    switch(etapaAtual) {
    case '#etapa-localizacao':
        etapaAtual = '#etapa-consumo';
        $(".slide").hide();
        $("#consumo-medio").show();
        $(".etapa-calculadora").removeClass("active");
        $("#etapa-consumo").addClass("active");
        $("#seta-anterior").removeClass("inactive");
        $("#seta-anterior").show();
        break;
    case '#etapa-consumo':
        etapaAtual = '#etapa-rede';
        $(".slide").hide();
        $("#rede").show();
        $(".etapa-calculadora").removeClass("active");
        $("#etapa-rede").addClass("active");
        break;
    case '#etapa-rede':
        etapaAtual = '#etapa-face';
        $(".slide").hide();
        $("#face-da-casa").show();
        $(".etapa-calculadora").removeClass("active");
        $("#etapa-face").addClass("active");
        break;
    case '#etapa-face':
        etapaAtual = '#etapa-telhado';
        $(".slide").hide();
        $("#telhado").show();
        $(".etapa-calculadora").removeClass("active");
        $("#etapa-telhado").addClass("active");
        break;
    case '#etapa-telhado':
        etapaAtual = '#etapa-contato';
        $(".slide").hide();
        $("#contato").show();
        $(".etapa-calculadora").removeClass("active");
        $("#etapa-contato").addClass("active");
        $("#seta-proxima").hide();
        break;
    default:
    }
  });
  // sequencia de etapas pelos botões no conteúdo
  $("#abre-seletor-cidade").click(function() {
    $(".slide").hide();
    $("#seletor-cidade").show();
  });
  $("#estados").change(function() {
    $("#cidades").show();
  });
  $("#cidades").change(function() {
    $("#confirma-cidade-seletor").show();
  });
  $("#confirma-cidade-seletor, #confirma-cidade, #etapa-consumo").click(function() {
    etapaAtual = '#etapa-consumo';
    $("#seta-anterior").removeClass('inactive');
    $(".slide").hide();
    $("#consumo-medio").show();
    $(".etapa-calculadora").removeClass("active");
    $("#etapa-consumo").addClass("active");
    $("#seta-anterior").show();
  });
  $("#consumo-switcher").change(function() {
    $("#media-mensal, #media-12-meses, #seletor-consumo p").toggleClass("active");
  });
  $("#confirma-consumo, #etapa-rede").click(function() {
    etapaAtual = '#etapa-rede';
    $(".slide").hide();
    $("#rede").show();
    $(".etapa-calculadora").removeClass("active");
    $("#etapa-rede").addClass("active");
  });
  $("#rede-monofasica, #rede-bifasica, #rede-trifasica, #etapa-face").click(function() {
    etapaAtual = '#etapa-face';
    $(".slide").hide();
    $("#face-da-casa").show();
    $(".etapa-calculadora").removeClass("active");
    $("#etapa-face").addClass("active");
  });
  $("#face-norte, #face-sul, #etapa-telhado").click(function() {
    etapaAtual = '#etapa-telhado';
    $(".slide").hide();
    $("#telhado").show();
    $(".etapa-calculadora").removeClass("active");
    $("#etapa-telhado").addClass("active");
  });
  $("#telha-borracha, #telha-ceramica, #telha-fibrocimento, #telha-metalica, #telha-trapezoidal, #etapa-contato").click(function() {
    etapaAtual = '#etapa-contato';
    $(".slide").hide();
    $("#contato").show();
    $(".etapa-calculadora").removeClass("active");
    $("#etapa-contato").addClass("active");
    $("#seta-proxima").hide();
  });
  $("#confirma-contato").click(function() {
    etapaAtual = '#etapa-resultado';
    $(".slide").hide();
    $("#kit-energia-solar").show();
    $(".etapa-calculadora").removeClass("active");
    $("#etapa-resultado").addClass("active").removeClass("inactive");
    $("#setas").hide();
    $(".etapa-calculadora:not('#etapa-resultado')").addClass("inactive");
  });
  $("#confirma-logger, #rejeita-logger").click(function() {
    etapaAtual = '#fim-calculadora';
    $(".slide").hide();
    $("#fim-calculadora").show();
  });
  $("#etapa-localizacao").click(function() {
    etapaAtual = '#etapa-localizacao';
    $(".slide").hide();
    $("#localizacao").show();
    $(".etapa-calculadora").removeClass("active");
    $("#etapa-localizacao").addClass("active");
    $("#seta-anterior").hide();
  });
});

$("#myModal").modal('show');
