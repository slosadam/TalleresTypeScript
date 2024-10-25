import { dataSeries } from "./dataSeries.js";
var serieTable = document.getElementById('serie');
var totalTempElm = document.getElementById("total-Temporadas");
agregarSeriesInTable(dataSeries);
totalTempElm.innerHTML = "".concat(getTotalTemporadas(dataSeries));
function agregarSeriesInTable(serie) {
    console.log("Cargando series");
    serie.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td>").concat(serie.nombre, "</td>\n        <td>").concat(serie.plataforma, "</td>\n        <td>").concat(serie.temporada, "</td>");
        serieTable.appendChild(trElement);
    });
}
function getTotalTemporadas(serie) {
    var totalTemporadas = 0;
    serie.forEach(function (serie) { return totalTemporadas = totalTemporadas + serie.temporada; });
    return totalTemporadas;
}
