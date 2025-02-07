/**
 * APP PWA - Etanol x Gasolina
 * @author Alex Lima
 * @Version 2.0
 */

function calcular() {
    // caoturar os valores das caixas de input
        let gasolina = document.getElementById('gasolina').value
        let etanol = document.getElementById('etanol').value
        let kmlGasolina = document.getElementById('kmGasolina').value
        let kmlEtanol = document.getElementById('kmEtanol').value
       //calculo da vantagem
       if (etanol < (kmlEtanol / kmlGasolina) * gasolina) {
        document.getElementById('status').src = "img/etanol.png"
       } else {
        document.getElementById('status').src = "img/gasolina.png"
       }
    }
    //cálculo de vantagem
    if(etanol < (Etanol / kmlGasolina) * gasolina ){
        document.getElementById('status').src = "img/etanol.png"
    }else{
        document.getElementById('status').src = "img/gasolina.png"
    }


