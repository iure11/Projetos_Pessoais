

var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var style = document.createElement('link');
style.href = "/jAlertWifi.css";
style.rel = "stylesheet";
document.getElementsByTagName('head')[0].appendChild(style);



function alertWifi($txt, $hasTimer, $countTimer, $srcImg, $fontSize) {
    let $panelInfo = $(`<div></div>`).addClass("panelInfo");
    let $contentPanel = $(`<div></div>`).addClass("contentPanel");
    $($panelInfo).append($contentPanel);

    // Adiciona uma imagem ao painel de informações
    if ($srcImg != "") {
        $imgPanelInfo = $("<img>").attr("src",$srcImg);
        $($contentPanel).append($imgPanelInfo);
    }
    // Adiciona o texto ao painel de informações ou o contador
    $txtPanelInfo = ($hasTimer)?$("<p></p>").html($countTimer):$("<p></p>").html($txt);
    $($txtPanelInfo).css("font-size",`${$fontSize}px`);
    $($contentPanel).append($txtPanelInfo);
    
    // Se não houver timer exibe um texto fixo ao inves de um cronometro regressivo
    if (!$hasTimer) {
        $btnPanelInfo = $("<button></button>").text("Fechar").addClass("button");
        $($contentPanel).append($btnPanelInfo);
        $($btnPanelInfo).click(function(){closeAlertWifi($panelInfo)});
    }

    // Adiciona o painel de informações ao body
    $("body").append($panelInfo);
    $($panelInfo).hide(0);
    $($panelInfo).slideDown(500);
    
    // Eh um cronometro regressivo?
    if ($hasTimer) showChronoAlertWifi($panelInfo, $countTimer);
}

// ----------------------------------------------------------------------------------------
// Fecha o painel de informacoes
// Parâmetros:
//  - $id: id do painel de informações
function closeAlertWifi($id) {
    $($id).slideUp(300, function() {$($id).remove()});
}

// ----------------------------------------------------------------------------------------
// Fecha o painel de informacoes
// Parâmetros:
//  - $id: id do painel de informações
function showChronoAlertWifi($panelInfo, $countTimer) {
    $($panelInfo).children("div").children("p").text($countTimer);
    if ($countTimer > 0) setTimeout(showChronoAlertWifi, 1000, $panelInfo, --$countTimer);
    else closeAlertWifi($panelInfo);
}
