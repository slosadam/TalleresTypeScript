import {Serie} from "./serie.js";
import {dataSeries} from "./dataSeries.js";


let serieTable: HTMLElement = document.getElementById('serie')!;
const totalTempElm: HTMLElement = document.getElementById("total-Temporadas")!;

agregarSeriesInTable(dataSeries);
totalTempElm.innerHTML = `${getTotalTemporadas(dataSeries)}`



function agregarSeriesInTable(serie: Serie[]):void{
    console.log("Cargando series");
    serie.forEach((serie)=>{
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
        <td>${serie.nombre}</td>
        <td>${serie.plataforma}</td>
        <td>${serie.temporada}</td>`;
        serieTable.appendChild(trElement);

    });
}

function getTotalTemporadas(serie: Serie[]): number{
    let totalTemporadas: number =0;
    serie.forEach((serie) => totalTemporadas = totalTemporadas + serie.temporada);
    return totalTemporadas; 
}


